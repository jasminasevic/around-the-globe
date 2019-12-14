import { logging } from 'protractor';
import { GalleryComponent } from './../gallery/gallery.component';
import { GalleryService } from './../gallery.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';

interface Image {
  src: string;
  alt: string;
}
interface Blog {
  id: number;
  text: string;
  title: string;
  description: string;
  category: string;
  images: Image;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog;

  constructor(private service: GalleryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    // this.single_blog = this.GalleryService.getSingleBlog(id);
    // console.log(this.single_blog);

    this.service.dohvatiGallery().subscribe(
      response => {
        const result = response as Blog[];
        const bl = result.find(p => p.id === id);
        // console.log("text je " + bl);

        if (!bl) {
          console.log("kjcnakncaks")
          return this.router.navigate(['/not-found']);
        }

        this.blog = bl;

      },
      error => {
        console.log(error);
      }
    );
  }

}

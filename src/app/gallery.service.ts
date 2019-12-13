import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';

@Injectable()
export class GalleryService {

    providedIn: 'root';

    constructor(private service: HttpClient) {

    }

    dohvatiGallery() {
        const blogs = this.service.get('http://localhost:4200/assets/jsons/blogs.json');
        return blogs;
    }
}
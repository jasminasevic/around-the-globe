import { GalleryService } from './gallery.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FilterPipe } from './filter.pipe';

//components import
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthorComponent } from './author/author.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    NavComponent,
    FooterComponent,
    NotFoundComponent,
    AuthorComponent,
    HomeComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

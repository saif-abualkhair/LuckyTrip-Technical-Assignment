import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { MainSearchComponent } from './main-search/main-search.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { PopupWindowComponent } from './popup-window/popup-window.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    BlogPostsComponent,
    MainSearchComponent,
    ContentAreaComponent,
    PopupWindowComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    BlogPostsComponent,
    MainSearchComponent,
    ContentAreaComponent,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }

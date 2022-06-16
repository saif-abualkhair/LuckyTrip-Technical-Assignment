import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { MainSearchComponent } from './main-search/main-search.component';
import { ContentAreaComponent } from './content-area/content-area.component';



@NgModule({
  declarations: [
    BlogPostsComponent,
    MainSearchComponent,
    ContentAreaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BlogPostsComponent,
    MainSearchComponent,
    ContentAreaComponent
  ]
})
export class SharedModule { }

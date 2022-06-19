import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { MainSearchComponent } from './main-search/main-search.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { PopupWindowComponent } from './popup-window/popup-window.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { TrendingComponent } from './trending/trending.component';



@NgModule({
  declarations: [
    BlogPostsComponent,
    TrendingComponent,
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
    TrendingComponent,
    MainSearchComponent,
    ContentAreaComponent,
    FormsModule,
    ReactiveFormsModule,
    LoaderComponent
  ]
})
export class SharedModule { }

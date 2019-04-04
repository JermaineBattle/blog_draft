import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import * as $ from 'jquery';

//COMPONENT IMPORTS
import { NavigationComponent } from './navigation.component';
import { HomeComponent } from './../home/home.component';
import { MusicComponent } from './../music/music.component';
import { VideosComponent } from './../videos/videos.component';
import { NewsComponent } from './../news/news.component';
import { ContactComponent } from './../contact/contact.component';

//ROUTER IMPORT
import {RouterModule, Routes} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      {path: 'music', component: MusicComponent},
      {path: 'home', component: HomeComponent},
      {path: 'videos', component: VideosComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'news', component: NewsComponent}
    ]),
  ],

  declarations: [
    NavigationComponent,
  ],

  exports: [
    NavigationComponent,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  bootstrap: [NavigationComponent],

})

export class NavigationModule { }

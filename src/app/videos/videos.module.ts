import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { VideosComponent } from './videos.component';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule

  ],
  declarations: [
    VideosComponent,

  ],

  exports: [
    VideosComponent,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  bootstrap: [VideosComponent],


})

export class VideosModule { }

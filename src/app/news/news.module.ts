import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { NewsComponent } from './news.component';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule

  ],
  declarations: [
    NewsComponent,

  ],

  exports: [
    NewsComponent,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  bootstrap: [NewsComponent],


})

export class NewsModule { }

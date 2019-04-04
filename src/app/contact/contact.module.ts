import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule

  ],
  declarations: [
    ContactComponent,

  ],

  exports: [
    ContactComponent,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  bootstrap: [ContactComponent],


})

export class ContactModule { }

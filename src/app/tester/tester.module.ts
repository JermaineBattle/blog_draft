import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS


// MODULES
import { TesterComponent } from './tester.component';


@NgModule({
  imports: [
    CommonModule,

  ],

  exports: [
    TesterComponent,
  ],
  declarations: [
    TesterComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class TesterModule { }

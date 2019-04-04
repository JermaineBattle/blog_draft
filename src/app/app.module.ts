import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Import for use of REST API
import { HttpClientModule }  from '@angular/common/http';

import { AppComponent } from './app.component';

//CONTAINER IMPORTS
import { ContainerComponent } from './container/container.component';
import { ContainerModule } from './container/container.module';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { PostService } from './post.service';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    ContainerModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
  ],
  providers: [AppComponent,
              PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule{ }

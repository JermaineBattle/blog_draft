import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';


// COMPONENTS
import { ContainerComponent } from './container.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { HomeComponent } from '../home/home.component';
import { MusicComponent } from '../music/music.component';
import { VideosComponent } from '../videos/videos.component';
import { NewsComponent } from '../news/news.component';
import { ContactComponent } from '../contact/contact.component';

// MODULES
import { NavigationModule } from '../navigation/navigation.module';
import { HomeModule } from '../home/home.module';
import { MusicModule } from '../music/music.module';
import { VideosModule } from '../videos/videos.module';
import { NewsModule } from '../news/news.module';
import { ContactModule } from '../contact/contact.module';
import { TesterModule } from '../tester/tester.module';

import {RouterModule, Routes} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    NavigationModule,
    HomeModule,
    MusicModule,
    VideosModule,
    NewsModule,
    ContactModule,
    RouterModule.forRoot([
      {path: 'music', component: MusicComponent},
      {path: 'home', component: HomeComponent},
      {path: 'videos', component: VideosComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'news', component: NewsComponent}
    ]),

    TesterModule
  ],

  exports: [
    ContainerComponent,
  ],
  declarations: [
    ContainerComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class ContainerModule { }

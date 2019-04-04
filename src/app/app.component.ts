import { Component, HostListener} from '@angular/core';
import * as $ from 'jquery';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import  { map } from 'rxjs/operators';
import { PostService } from './post.service';
import { Observable, of} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  headers = new HttpHeaders().set('Access-Control-Allow-Headers', '*')
                             .set('Access-Control-Allow-Origin', '*')
                             .set('Accept','application/json');
  //POSTS ARRAY THAT MIMICS THE POSTS ARRAY IN THE SERVICE
  posts = [];

  constructor(private postService: PostService){}


  ngOnInit(){
    //BOTTOM TWO LINES FOR TESTING HEADERS
    // console.log("Headers working from AppComponent");
    // console.log(this.headers);

    this.getPosts();
}

  getPosts(){
    //MAKE SURE TO CALL METHOD
    this.postService.getPosts();
    //STATEMENT TO LINK THIS POSTS ARRAY to POSTS ARRAY (SERVICE)
    this.posts = this.postService.posts;
}


  }

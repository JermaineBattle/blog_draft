import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import  { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';


//API IMPORTS
import { Observable, of } from 'rxjs';
//PATH TO BLOG_API POST MODEL
// import { Post } from '../../blog-api/models/post.js';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  // uri = 'http://localhost:4000/';
  //URL FOR THE BLOG_API SERVER
  private postsURL = 'http://localhost:4000/posts'
  //IMPORT HEADERS
  headers = new HttpHeaders().set('Access-Control-Allow-Headers', '*')
                             .set('Access-Control-Allow-Origin', '*')
                             .set('Accept','application/json');
  //POSTS ARRAY HOLDING API DATA
  posts = [];

  constructor(private http: HttpClient){}

  ngOnInit(){
    console.log('service working on INIT');
    this.getPosts;
  }

  getPosts(){
    this.http.get(this.postsURL).subscribe(data => {
      for(let key in data){
        if(data.hasOwnProperty(key)){
          this.posts.push(data[key]);
        }
      }
    });
     return this.posts;
  }


}

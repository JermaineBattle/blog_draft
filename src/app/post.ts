//THIS MODULE IS NOT USED FOR THE MODEL
//THE MODEL IN THE BLOG_API DIRECTORY IN ROOT IS USED

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';



export default class Post {
  headline: String;
  postImage: String;
  article: String;
}

import { Component, OnInit } from '@angular/core';
import { PostService } from "../post.service";

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  posts = [];
  mapToSearch = new Map();
  constructor(private postService: PostService) {
    }

  ngOnInit() {
    this.posts = this.postService.posts;

    $(document).ready(function(){
      $('p.article').text(function(_, txt) {
        if(txt.length > 150){
        txt = txt.substr(0, 150) + "...";
        $(this).parent().append("<link type='button'><a class = 'btn  read-more' href='#' style = 'background-color: #0040ff; color: white;font-weight: bolder !important; font-size: 1.7em !important;' >READ MORE</a>");
        console.log('about to return')
        return txt;
          }
        $(this).html(txt);
      });
    });

    
  }
}

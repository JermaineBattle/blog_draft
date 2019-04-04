import { Component, OnInit } from '@angular/core';
import { PostService } from "../post.service";

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnInit {
  posts = [];

    constructor(private postService: PostService) { }

    ngOnInit() {
      this.posts = this.postService.posts;
    }
  }

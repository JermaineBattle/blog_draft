import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { PostService } from "../post.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.posts;
        // BELOW IS THE 'READ MORE' FUNCTIONALITY
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



    // LOAD MORE BUTTONS BEGIN
    // Refractor in the future with a loop

    $('.load-more').on({
    	mouseenter: function(){
    		$(this).css('background-color', 'darkgrey');
    	},

    	click: function(){
    			$('.latest-news, .news-item-container2, .video-item-container2, .load-more2').removeClass('hidden');
    			$(this).addClass('hidden');
    		},

    	mouseleave: function(){
    		$(this).css('background-color', 'inherit');
    	}
    	});


    $('.load-more2').on({
    	mouseenter: function(){
    		$(this).css('background-color', 'darkgrey');
    	},

    	click: function(){
    			$('.latest-news, .news-item-container3, .video-item-container3, .load-more3').removeClass('hidden2');
    			$(this).addClass('hidden');
    		},


    	mouseleave: function(){
    		$(this).css('background-color', 'inherit');

    	}
    	});



    $('.load-more3').on({
    	mouseenter: function(){
    		$(this).css('background-color', 'darkgrey');
    	},

    	click: function(){
    			$('.latest-news, .news-item-container4, .video-item-container4 .load-more4').removeClass('hidden3');
    			$(this).addClass('hidden');
    		},

    	mouseleave: function(){
    		$(this).css('background-color', 'inherit');
    	}
    	});

  }
}

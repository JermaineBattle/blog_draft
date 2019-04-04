import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(){
    null;
  }

  ngOnInit() {
    $(document).ready(function(){
    // CODE FOR TOGGLING COLLAPSIBLE MENU
    $('.collapsible-menu-hide').on({
      click: function(){
        $('.collapsible-menu-hide').css('display', 'none');
        $('.collapsible-menu-show').css('display', 'block');
        $('.menu-content').fadeToggle(0).animate({
          width: '+=60%'
        })
      }
    });

    //RESER COLLAPSE-MENU AFTER ITEM CLICKED
    $('.collapsible-menu-show').on({
      click: function(){
        $('.collapsible-menu-hide').css('display', 'block');
        // $('.collapsible-menu-show').css('visibility', 'hidden');
        $('.menu-content').animate({
          width: '0%'
        }).fadeToggle(0);
        $('.collapsible-menu-show').css('display', 'none');
      }
    });
    // MENU LIST COLLAPSE AFTER MENU ITEM HAS BEEN CLICKED
    $('.menu-list li ').on({
      click: function(){
        $('.collapsible-menu-hide').css('display', 'block');
        // $('.collapsible-menu-show').css('visibility', 'hidden');
        $('.menu-content').animate({
          width: '0%'
        }).fadeToggle(0);
        $('.collapsible-menu-show').css('display', 'none');
      }
    })

    // SEARCH ICON TOGGLE
    $('.search-icon').on({
      click: function(){
        $('.search-icon').fadeToggle(0);
        $('.logo').fadeToggle(0);
        $('.close-icon').fadeToggle(0);
        $('.search-form').fadeToggle(0);
        $('.search-form').focus();
      }
    });

    //CLOSE ICON TO ESCAPE SEARCH BAR
    $('.close-icon').on({
      click: function(){
        $('.search-icon').fadeToggle(0);
        $('.logo').fadeToggle(0);
        $('.close-icon').fadeToggle(0);
        $('.search-form').fadeToggle(0);
      }
    });
  });

};
};

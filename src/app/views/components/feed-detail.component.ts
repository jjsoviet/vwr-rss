import { Component, Input } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Feed } from '../../data/feed';
declare var $: any;

@Component({
  selector: 'feed-detail',
  templateUrl: '../html/feed-detail.component.html',
  styleUrls: ['../css/styles.css'],
  providers: [AppComponent]
})

export class FeedDetailComponent {
  //Properties
  @Input() selectedFeed: Feed;

  //Constructor
  constructor (private appComponent: AppComponent) {
    this.overrideShareStyles();
  }

  //Functions
  overrideShareStyles() {
    setTimeout(function() {
      $('.sb-wrapper').css("background", "transparent");
      $('.sb-wrapper').css("border", "0");
      $('.sb-wrapper').css("font-size", "1.3em");
      $('.sb-wrapper').css("transition", " background 200ms ease-in-out, color 200ms ease-in-out");
      $('.sb-wrapper:hover').css("background", "#333");
    }, 0);
  }

  closeDetail() {
    setTimeout(function() {
      $('.detail-container').removeClass('selected');
    }, 0);
    this.appComponent.enableView();
  }
}

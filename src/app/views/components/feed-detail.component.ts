import { Component, Input } from '@angular/core';
import { FeedViewComponent } from './feed-view.component';
import { Feed } from '../../data/feed';
declare var $: any;

@Component({
  selector: 'feed-detail',
  templateUrl: '../html/feed-detail.component.html',
  styleUrls: ['../css/styles.css']
})

export class FeedDetailComponent {
  //Properties
  @Input() currentFeed: Feed;

  constructor (private feedView: FeedViewComponent) {
    setTimeout(function() {
      $('.sb-wrapper').css("background", "transparent");
      $('.sb-wrapper').css("border", "0");
      $('.sb-wrapper').css("font-size", "1.3em");
    }, 0);
  }

  close(): void {
    $('.detail-container').removeClass('selected');
    this.feedView.enableView();
  }
}

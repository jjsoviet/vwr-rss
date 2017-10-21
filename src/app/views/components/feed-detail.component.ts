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

  constructor (private feedView: FeedViewComponent) {}

  close(): void {
    $('.detail-container').removeClass('selected');
    this.feedView.enableView();
  }
}

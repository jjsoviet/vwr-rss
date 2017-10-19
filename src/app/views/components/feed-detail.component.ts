import { Component, Input } from '@angular/core';
import { Feed } from '../../data/feed';
declare var $: any;

@Component({
  selector: 'feed-detail',
  templateUrl: '../html/feed-detail.component.html',
  styleUrls: ['../css/styles.css']
})

export class FeedDetailComponent {
  //Properties
  @Input() currentField: Feed;

  constructor () {}

  close(): void {
    $('.detail-container').removeClass('selected');
    $('.darken-bg').removeClass('active');
  }
}

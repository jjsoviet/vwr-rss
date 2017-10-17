import { Component, Input } from '@angular/core';
import { Feed } from '../../data/feed';

@Component({
  selector: 'feeddetail',
  templateUrl: '../html/feed-detail.component.html',
  styleUrls: ['../css/styles.css']
})

export class FeedDetailComponent {
  constructor () {
  }
  //Objects for data binding
  @Input() selectedFeed: Feed;
}

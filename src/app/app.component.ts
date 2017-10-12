import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { SampleObject } from './sampleobject';
import { ObjectService } from './object.service';
import { Feed } from './data/feed';
import { RssService } from './services/rss.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  //Constructor
  constructor(private rssService: RssService) { }

  //Interface implementation
  ngOnInit(): void {
    this.getFeeds();
  }

  //Objects for data binding
  selectedFeed: Feed;
  feeds: Feed[];

  //Functions
  getFeeds(): void {
    this.rssService.getFeeds().then(feeds => this.feeds = feeds);
  }

  displayFeed(feed: Feed): void {
    this.selectedFeed = feed;
  }
}

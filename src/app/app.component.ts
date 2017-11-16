import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { Source } from './data/source';
import { Feed } from './data/feed';
import { SourceService } from './services/source.service';
import { FeedService } from './services/feed.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./views/css/styles.css', './views/css/styles-responsive.css']
})

export class AppComponent implements OnInit {
  //Properties
  source: Source;
  sources: Source[];
  feeds: Feed[];
  selectedFeed: Feed;
  defaultImage: string;

  //Constructor
  constructor(private sourceService: SourceService, private feedService: FeedService) {}

  //Interface Implementation
  ngOnInit() {
    this.getSources();
    this.selectedFeed = null;
    this.defaultImage = 'https://s3.amazonaws.com/freebiesupply/thumbs/2x/wired-logo.png';
  }

  //Data Functions
  getSources() {
    this.sourceService.getSources().subscribe((sources) => {
      this.sources = sources['sources'];
      this.setSource(this.sources[0].url);
    });
  }

  getFeeds() {
    this.feedService.getFeeds().subscribe(feeds => {
      this.feeds = feeds;
    });
  }

  setSource(source: string): void {
    if (source != null || source != undefined) {
      this.feedService.initializeSource(source);
      this.getFeeds();
    }
  }

  refreshSource(source: string) {
    this.setSource(source);
    this.getFeeds();
  }

  displayFeed(feed: Feed) {
    this.selectedFeed = feed;
    setTimeout(function() {
      $('.detail-container').addClass('selected');
    }, 0);
    this.disableView();
  }

  disableView() {
    $('.darken-bg').addClass('active');

    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
  }

  enableView() {
    $('.darken-bg').removeClass('active');
    window.onscroll=function(){};
  }
}

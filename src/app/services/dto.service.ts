import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DTO } from '../data/dto';
import { Feed } from '../data/feed';
import { FeedService } from './feed.service';

@Injectable()
export class DTOService {
  //Properties
  sourceURL: string;
  title: string;
  link: string;
  feeds: Feed[];

  //This will eventually be a true DTO pulling data from a source entered
  dto = { title: 'Source 1', link: 'https://www.google.com', feeds: this.feeds};

  //Constructor
  constructor(private feedService: FeedService) { }

  //Functions
  setSource(source: string): void {
    this.sourceURL = source;
    this.feedService.initializeSource(this.sourceURL);
  }

  //Return the Source information
  getDTO() {
    console.log("A service is requesting the DTO");
    // console.log(this.dto);

    this.feedService.getFeeds().subscribe(feeds => this.dto.feeds = feeds);

    return Observable.of(this.dto);
  }

  //Get the Feed information
  // getFeeds(): void {
  //   console.log("Source service requesting feeds");
  //   this.feedService.getFeeds().then(feeds => this.dto.feeds = feeds).then(feeds => console.log(this.dto.feeds));
  // }

  refreshDTO(): void {
    this.dto = {
      title: 'Source 1 Updated',
      link: '',
      feeds: []
    };
    this.feedService.clearFeeds();
    console.log('Feed service cleared');
    console.log(this.dto);
  }
}

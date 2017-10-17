import { Injectable } from '@angular/core';
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
  getDTO(): Promise<DTO> {
    console.log("A service is requesting the DTO");
    console.log(this.dto);

    this.getFeeds();
    return Promise.resolve(this.dto);
  }

  //Get the Feed information
  getFeeds(): void {
    console.log("Source service requesting feeds");
    this.feedService.getFeeds().then(feeds => this.dto.feeds = feeds).then(feeds => console.log(this.dto.feeds));
  }
}

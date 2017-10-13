import { Injectable } from '@angular/core';
import { DTO } from '../data/dto';
import { Feed } from '../data/feed';
import { FeedService } from './feed.service';

@Injectable()
export class DTOService {
  //Constructor
  constructor(private feedService: FeedService) {
    this.getFeeds();
  }

  //Data Objects
  title: string;
  link: string;
  feeds: Feed[];

  //This will eventually be a true DTO pulling data from a source entered
  dto = { title: 'Source 1', link: 'https://www.google.com', feeds: this.feeds};

  //Singular mock source
  //source = { title: 'Source 1', link: 'https://www.google.com', feeds: this.feeds};

  //Return the Source information
  getDTO(): Promise<DTO> {
    console.log("A service is requesting the DTO");
    console.log(this.dto);
    return Promise.resolve(this.dto);
  }

  //Get the Feed information
  getFeeds(): void {
    console.log("Source service requesting feeds");
    this.feedService.getFeeds().then(feeds => this.dto.feeds = feeds).then(feeds => console.log(this.dto.feeds));
  }
}

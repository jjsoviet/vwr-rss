import { Injectable } from '@angular/core';
import { Feed } from '../data/feed';
import { FEEDS } from '../data/mock-rss';

@Injectable()
export class FeedService {
  //Return the RSS Feed information
  getFeeds(): Promise<Feed[]> {
    console.log("A service is requesting feeds");
    console.log(FEEDS);
    return Promise.resolve(FEEDS);
  }
}

import { Injectable } from '@angular/core';
import { Feed } from '../data/feed';
import { FEEDS } from '../data/mock-rss';

@Injectable()
export class RssService {
  //Return the RSS Feed information
  getFeeds(): Promise<Feed[]> {
    return Promise.resolve(FEEDS);
  }
}

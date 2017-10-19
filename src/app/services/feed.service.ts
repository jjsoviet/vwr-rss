import { Injectable } from '@angular/core';
import { Feed } from '../data/feed';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FeedService {
  //Properties
  feeds: Feed[];
  sourceURL: string;

  //Constructor initializing HttpClient
  constructor(private http: HttpClient) {
    this.feeds = [];
  }

  //Functions
  initializeSource(source: string): void {
    this.sourceURL = source;
    console.log("Source: " + this.sourceURL);
  }

  //Return the RSS Feed information
  //For now this will return data from a single RSS source
  getFeeds() {
    console.log("A service is requesting feeds");

    //For now, use a converter to convert RSS to JSON
    //Will need to make own conversion algorithm
    console.log("Initializing HTTPClient with " + this.sourceURL);
    return this.http.get(this.sourceURL).map(data => this.parseFeeds(data['items']));
  }

  clearFeeds(): void {
    this.feeds = [];
  }

  parseFeeds(rawData: string[]): Feed[] {
    //Loop through each entry
    for (var i = 0; i < rawData.length; i++) {
      var feedObject = rawData[i];
      // console.log(feedObject);

      var feed = new Feed();
      feed.title = feedObject['title'];
      feed.date = feedObject['pubDate'];
      feed.author = feedObject['author'];
      feed.img = feedObject['thumbnail'];
      feed.content = feedObject['content'];
      feed.link = feedObject['guid'];

      this.feeds.push(feed);
    }

    return this.feeds;
  }
}

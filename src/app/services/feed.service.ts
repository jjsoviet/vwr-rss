import { Injectable } from '@angular/core';
import { Feed } from '../data/feed';
import { FEEDS } from '../data/mock-rss';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FeedService {
  //Properties
  rawData: string[];
  feeds: Feed[];
  sourceURL: string;

  //Constructor initializing HttpClient
  constructor(private http: HttpClient) {
    this.feeds = [];
  }

  //Functions
  initializeSource(source: string): void {
    this.sourceURL = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Frss.xml%3Fedition%3Dus';
    console.log(this.sourceURL);
  }

  //Return the RSS Feed information
  //For now this will return data from a single RSS source
  getFeeds(): Promise<Feed[]> {
    console.log("A service is requesting feeds");

    //For now, use a converter to convert RSS to JSON
    //Will need to make own conversion algorithm
    console.log("Initializing HTTPClient with " + this.sourceURL);
    this.http.get(this.sourceURL).subscribe(data => {
      this.rawData = data['items'];

      this.parseFeeds();
    }, err => {
      console.log("Error loading data");
    })
    return Promise.resolve(this.feeds);
  }

  parseFeeds(): void {
    //Loop through each entry
    for (var i = 0; i < this.rawData.length; i++) {
      var feedObject = this.rawData[i];
      console.log(feedObject);

      var feed = new Feed();
      feed.title = feedObject['title'];
      feed.date = feedObject['pubDate'];
      feed.author = feedObject['author'];
      feed.img = feedObject['thumbnail'];
      feed.content = feedObject['content'];
      feed.link = feedObject['guid'];

      this.feeds.push(feed);
    }
  }
}

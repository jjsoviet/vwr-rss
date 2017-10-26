import { Injectable } from '@angular/core';
import { Feed } from '../data/feed';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import * as feedParser from 'rss-to-json';

@Injectable()
export class FeedService {
  //Properties
  feed: Feed;
  feeds: Feed[];
  subject: Subject<Feed[]>;
  sourceURL: string;

  //Constructor initializing HttpClient
  constructor(private http: HttpClient) {
    this.feed = new Feed();
    this.feeds = new Array<Feed>();
    this.subject = new Subject<Feed[]>();
  }

  //Functions
  initializeSource(source: string) {
    if (source != null || source != undefined)
      this.sourceURL = source;
  }

  //Return the RSS Feed information
  //For now this will return data from a single RSS source
  getFeeds() {
    console.log(`A service is requesting feeds from URL ${this.sourceURL}`);
    let parsedFeeds = Object.create(this.feeds);

    feedParser.load(this.sourceURL, (err, res) => {
      parsedFeeds = this.parseFeeds(res);
      this.subject.next(parsedFeeds);
    });

    return this.subject.asObservable();
  }

  parseFeeds(res: Response) {
    let rawData = res['items'];
    let currFeeds = Object.create(this.feeds);

    for (let i = 0; i < rawData.length; i++) {
      let currFeed = Object.create(this.feed);
      currFeed.title = rawData[i]['title'];
      currFeed.date = this.formatDate(rawData[i]['created']);
      currFeed.author = rawData[i]['creator'];
      currFeed.img = rawData[i]['media']['thumbnail'][0]['url'][0];
      currFeed.content = rawData[i]['description'];
      currFeed.link = rawData[i]['link'];

      currFeeds.push(currFeed);
    };

    return currFeeds;
  }

  formatDate(rawDate: string) {
    let date = new Date(Number(rawDate));
    let medDateFormat = moment(date).format('MMM Do YYYY, h:mm a');
    let elapsed = moment(date).startOf('hour').fromNow();
    return `${medDateFormat} (${elapsed})`;
  }
}

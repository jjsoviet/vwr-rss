import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { DTO } from '../data/dto';
import { Feed } from '../data/feed';
import { FeedService } from './feed.service';

@Injectable()
export class DTOService {
  //This will eventually be a true DTO pulling data from a source entered
  dto: DTO;
  subject: Subject<any>;

  //Constructor
  constructor(private feedService: FeedService) {
    this.dto = new DTO();
    this.subject = new Subject<any>();
  }

  //Functions
  setSource(source: string) {
    if (source != null || source != undefined) {
      this.feedService.initializeSource(source);
      this.feedService.refreshFeeds();
    }

  }

  //Return the Source information
  getDTO(): Observable<any> {
    console.log("A service is requesting the DTO");
    let currDTO = Object.create(this.dto);
    console.log(`New DTO: ${currDTO.title}`);


    this.feedService.getFeeds().subscribe(feeds => {
      currDTO.feeds = feeds;

      // currDTO.feeds.forEach(feed => console.log(`Received Feed: ${JSON.stringify(feed['title'])}`));
      //console.log(`DTO: ${JSON.stringify(currDTO.feeds)}`);
      this.subject.next({ dto: currDTO });
    });

    return this.subject.asObservable();
  }
}

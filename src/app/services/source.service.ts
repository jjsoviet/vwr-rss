import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Source } from '../data/source';

@Injectable()
export class SourceService {
  //Properties
  source: Source;
  sources: Source[];
  subject: Subject<any>;

  //Constructor
  constructor() {
    this.sources = new Array<Source>();
    this.source = new Source();
    this.subject = new Subject<any>();
  }

  //Return list of sources
  getSources() {
    console.log(`Getting sources list`);

    let currSources = Object.create(this.sources);

    setTimeout(() => {
      currSources.push(Object.assign(Object.create(this.source), {
        url: 'https://www.wired.com/feed/rss',
        title: 'Top Stories'
      }));

      currSources.push(Object.assign(Object.create(this.source), {
        url: 'https://www.wired.com/feed/category/business/latest/rss',
        title: 'Business'
      }));

      currSources.push(Object.assign(Object.create(this.source), {
        url: 'https://www.wired.com/feed/category/gear/latest/rss',
        title: 'Gear'
      }));

      currSources.push(Object.assign(Object.create(this.source), {
        url: 'https://www.wired.com/feed/category/science/latest/rss',
        title: 'Science'
      }));

      currSources.push(Object.assign(Object.create(this.source), {
        url: 'https://www.wired.com/feed/category/culture/latest/rss',
        title: 'Culture'
      }));

      console.log(`Created sources: ${currSources}`);
      this.subject.next({ sources: currSources });
    }, 200);

    return this.subject.asObservable();
  }
}

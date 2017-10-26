import { Observable } from 'rxjs/Observable';
import { Feed } from './feed';

export class DTO {
  title: string;
  link: string;
  feeds: Feed[];

  constructor() {
    this.title =  "Some DTO";
    this.link = "https://google.com";
    this.feeds = [];
  }
}

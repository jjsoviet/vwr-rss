import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Feed } from '../../data/feed';
import { DTO } from '../../data/dto';
import { DTOService } from '../../services/dto.service'
declare var $: any;

@Component({
  selector: 'feedview',
  templateUrl: '../html/feed-view.component.html',
  styleUrls: ['../css/styles.css']
})

export class FeedViewComponent implements OnInit {
  //Properties
  dto: DTO;
  selectedFeed: Feed;
  feeds: Feed[];
  
  //Constructor
  constructor(private dtoService: DTOService) { }

  //Interface implementation
  ngOnInit(): void {
    this.setSource('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Frss.xml%3Fedition%3Dus');
    this.getDTO();
  }

  //Functions
  setSource(source: string): void {
    this.dtoService.setSource(source);
  }

  getDTO(): void {
    this.dtoService.getDTO().then(dto => this.dto = dto).then(dto => this.feeds = dto.feeds);
  }

  displayFeed(feed: Feed): void {
    this.selectedFeed = feed;
    console.log("selected: " + this.selectedFeed.title);
    $('.detail-container').addClass('selected');
  }

  close(): void {
    $('.detail-container').removeClass('selected');
  }
}

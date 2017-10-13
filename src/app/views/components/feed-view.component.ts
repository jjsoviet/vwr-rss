import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Feed } from '../../data/feed';
import { DTO } from '../../data/dto';
import { DTOService } from '../../services/dto.service'

@Component({
  selector: 'feedview',
  templateUrl: '../html/feed-view.component.html',
  styleUrls: ['../css/styles.css']
})

export class FeedViewComponent implements OnInit {
  //Constructor
  constructor(private dtoService: DTOService) { }

  //Interface implementation
  ngOnInit(): void {
    this.getDTO();
  }

  //Objects for data binding
  dto: DTO;
  selectedFeed: Feed;
  feeds: Feed[];

  //Functions
  getDTO(): void {
    this.dtoService.getDTO().then(dto => this.dto = dto).then(dto => this.feeds = dto.feeds);
  }

  displayFeed(feed: Feed): void {
    this.selectedFeed = feed;
  }
}

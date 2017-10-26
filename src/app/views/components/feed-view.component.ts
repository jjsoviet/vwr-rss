import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Feed } from '../../data/feed';
import { DTO } from '../../data/dto';
import { DTOService } from '../../services/dto.service';
declare var $: any;

@Component({
  selector: 'feedview',
  templateUrl: '../html/feed-view.component.html',
  styleUrls: ['../css/styles.css']
})

export class FeedViewComponent implements OnInit {
  //Properties
  dto: Observable<DTO>;
  selectedFeed: Feed;

  //Constructor
  constructor(private dtoService: DTOService, private cdRef: ChangeDetectorRef) { }

  //Interface implementation
  ngOnInit() {
    this.getDTO();
    this.selectedFeed = null;
  }

  //Functions
  refreshSource(source: string) {
    //this.dto.feeds = [];
    this.dtoService.setSource(source);
    this.getDTO();
    console.log(`DTO: ${this.dto}`);
  }

  setSource(source: string): void {
    this.dtoService.setSource(source);
  }

  getDTO() {
    this.dtoService.getDTO().subscribe((dto) => {
      this.dto = dto['dto'];

      //console.log(`Updated DTO: ${JSON.stringify(this.dto.feeds)}`);
    });

    setTimeout(() => {
      console.log(`DTO: ${this.dto}`);
    }, 2000);
  }

  displayFeed(feed: Feed) {
    this.selectedFeed = feed;
    console.log("Selected: " + this.selectedFeed.title);
    $('.detail-container').addClass('selected');
    this.disableView();
  }

  refreshFeedView() {
    console.log(`DTO: ${this.dto}`);
  }

  disableView() {
    $('.darken-bg').addClass('active');

    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
  }

  enableView() {
    $('.darken-bg').removeClass('active');
    window.onscroll=function(){};
  }
}

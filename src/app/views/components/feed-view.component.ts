import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

  //Constructor
  constructor(private dtoService: DTOService, private cdRef: ChangeDetectorRef) { }

  //Interface implementation
  ngOnInit(): void {
    this.dtoService.getDTO().subscribe(dto => this.dto = dto);
  }

  //Functions
  refreshSource(source: string): void {
    this.dto = null;
    this.dtoService.refreshDTO();
    this.cdRef.detectChanges();
    console.log(this.dto);

    setTimeout(() => {
      this.setSource(source);
      this.getDTO();
    }, 1000);
  }

  setSource(source: string): void {
    this.dtoService.setSource(source);
  }

  getDTO(): void {
    // this.dtoService.getDTO().then(dto => this.dto = dto).then(dto => console.log("DTO: ")).then(dto => console.log(this.dto.title)).then(dto => console.log(this.dto.feeds)).then(dto => this.cdRef.detectChanges());
    this.dtoService.getDTO().subscribe(dto => this.dto = dto);
    this.cdRef.detectChanges();
    console.log(this.dto);
  }

  displayFeed(feed: Feed): void {
    this.selectedFeed = feed;
    console.log("selected: " + this.selectedFeed.title);
    $('.detail-container').addClass('selected');
    this.disableView();
  }

  close(): void {
    $('.detail-container').removeClass('selected');
    this.enableView();
  }

  disableView(): void {
    $('.darken-bg').addClass('active');
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
  }

  enableView(): void {
    $('.darken-bg').removeClass('active');
    window.onscroll=function(){};
  }
}

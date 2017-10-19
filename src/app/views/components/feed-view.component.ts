import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Feed } from '../../data/feed';
import { DTO } from '../../data/dto';
import { DTOService } from '../../services/dto.service';
declare var $: any;

@Component({
  selector: 'feedview',
  templateUrl: '../html/feed-view.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  styleUrls: ['../css/styles.css']
})

export class FeedViewComponent implements OnInit {
  //Properties
  dto: Observable<DTO>;
  selectedFeed: Feed;

  //Constructor
  constructor(private dtoService: DTOService, private cdRef: ChangeDetectorRef) { }

  //Interface implementation
  ngOnInit(): void {
    this.getDTO();
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
    this.dtoService.getDTO().subscribe(dto => {
      this.dto = Observable.of(dto);
      this.cdRef.markForCheck();
    });

    this.cdRef.detectChanges();
    console.log(this.dto);
  }

  displayFeed(feed: Feed): void {
    this.selectedFeed = feed;
    console.log("Selected: " + this.selectedFeed.title);
    $('.detail-container').addClass('selected');
    this.disableView();
  }

  refreshFeedView(): void {
    console.log("Force refreshing...");
    this.cdRef.detectChanges();
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

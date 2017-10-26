import { Component, OnInit } from '@angular/core';
import { FeedViewComponent } from './feed-view.component';
import { FeedDetailComponent } from './feed-detail.component';
declare var $: any;

@Component({
  selector: 'navbar',
  templateUrl: '../html/navbar.component.html',
  styleUrls: ['../css/styles.css'],
  providers: [ FeedViewComponent, FeedDetailComponent ]
})

export class NavbarComponent implements OnInit {
  //Sample Sources
  source: string;

  //Constructor
  constructor(private feedViewComponent: FeedViewComponent, private feedDetailComponent: FeedDetailComponent) {
    this.source = 'https://www.wired.com/feed/rss';
  }

  //Interface implementation
  ngOnInit(): void {
    this.feedViewComponent.setSource(this.source);
  }

  //Functions
  showSelection(): void {
    $('.selection-container').addClass('active');
    this.feedViewComponent.disableView();
  }

  close(): void {
    this.feedViewComponent.enableView();
    $('.selection-container').removeClass('active');
  }

  switchSource(newSource: string): void {
    this.source = newSource;
    this.close();
    this.feedViewComponent.refreshSource(this.source);
  }

  refreshView(): void {
    this.feedViewComponent.refreshFeedView();
  }
}

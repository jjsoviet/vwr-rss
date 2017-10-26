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
  defaultSource: string;

  //Constructor
  constructor(private feedViewComponent: FeedViewComponent, private feedDetailComponent: FeedDetailComponent) {
    this.defaultSource = 'https://www.wired.com/feed/rss';
    this.source = this.defaultSource;
  }

  //Interface implementation
  ngOnInit() {
    this.feedViewComponent.setSource(this.source);
  }

  //Functions
  showSelection() {
    $('.selection-container').addClass('active');
    this.feedViewComponent.disableView();
  }

  closeDetail() {
    this.feedViewComponent.enableView();
    $('.selection-container').removeClass('active');
  }

  switchSource(newSource: string) {
    this.source = newSource;
    this.closeDetail();
    this.feedViewComponent.refreshSource(this.source);
  }

  changeViewType() {

  }
}

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

    setTimeout(() => {this.trigger();}, 200);
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

  switchSource(newSource: string, event) {
    this.source = newSource;
    $('.selection-button').removeClass('active');
    $(`#${event.target.id}`).addClass('active');

    this.feedViewComponent.refreshSource(this.source);
    setTimeout(() => {this.trigger();}, 200);
  }

  changeViewType() {

  }

  //Bad workaround
  trigger() {
    //Nothing here
  }
}

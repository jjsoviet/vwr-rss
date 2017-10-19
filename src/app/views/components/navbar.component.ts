import { Component, OnInit } from '@angular/core';
import { FeedViewComponent } from './feed-view.component';
declare var $: any;

@Component({
  selector: 'navbar',
  templateUrl: '../html/navbar.component.html',
  styleUrls: ['../css/styles.css'],
  providers: [ FeedViewComponent ]
})

export class NavbarComponent implements OnInit {
  //Sample Sources
  source: string;

  //Constructor
  constructor(private feedViewComponent: FeedViewComponent) {
    this.source = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Frss.xml%3Fedition%3Dus';
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
}

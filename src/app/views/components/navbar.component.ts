import { Component, OnInit } from '@angular/core';
import { FeedViewComponent } from './feed-view.component';
import { FeedDetailComponent } from './feed-detail.component';
import { SourceService } from '../../services/source.service';
import { Source } from '../../data/source';
declare var $: any;

@Component({
  selector: 'navbar',
  templateUrl: '../html/navbar.component.html',
  styleUrls: ['../css/styles.css'],
  providers: [ FeedViewComponent, FeedDetailComponent ]
})

export class NavbarComponent implements OnInit {
  //Sample Sources
  source: Source;
  sources: Source[];
  defaultSource: string;

  //Constructor
  constructor(private feedViewComponent: FeedViewComponent, private feedDetailComponent: FeedDetailComponent, private sourceService: SourceService) {
    this.sources = new Array<Source>();
    this.source = new Source();
  }

  //Interface implementation
  ngOnInit() {
    this.getSources();
    setTimeout(() => {this.trigger();}, 2000);
  }

  //Functions
  getSources() {
    this.sourceService.getSources().subscribe((sources) => {
      this.sources = sources['sources'];
      this.feedViewComponent.setSource(this.sources[0].url);
    });
  }

  showSelection() {
    $('.selection-container').addClass('active');
    this.feedViewComponent.disableView();
  }

  switchSource(newSource: Source, event) {
    this.source = newSource;
    $('.selection-button').removeClass('active');
    $(`#${event.target.id}`).addClass('active');

    this.feedViewComponent.refreshSource(this.source.url);
    setTimeout(() => {this.trigger();}, 200);
  }

  changeViewType() {

  }

  //Bad workaround
  trigger() {
    //Nothing here
  }
}

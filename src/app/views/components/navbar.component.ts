import { Component, Input } from '@angular/core';
import { Source } from '../../data/source';
import { AppComponent } from '../../app.component';
declare var $: any;

@Component({
  selector: 'navbar',
  templateUrl: '../html/navbar.component.html',
  styleUrls: ['../css/styles.css'],
  providers: [AppComponent]
})

export class NavbarComponent {
  //Properties
  @Input() sources: Source[];
  isGrid: boolean;

  //Constructor
  constructor(private appComponent: AppComponent) {
    this.isGrid = true;
    setTimeout(() => {
      this.checkViewType();
      $("button[id='Top Stories']").addClass('active');
     }, 300);
  }

  //Functions
  switchSource(newSource: Source, event) {
    $('.selection-button').removeClass('active');
    $(`button[id='${event.target.id}']`).addClass('active');

    this.appComponent.refreshSource(newSource.url);

    setTimeout(() => { this.checkViewType(); }, 200);
  }

  changeViewType() {
    if(this.isGrid) {
      $('.feed-item').removeClass('grid-item');
      $('.feed-item').addClass('list-item');
      $('.material-icons').text('list');
    } else {
      $('.feed-item').addClass('grid-item');
      $('.feed-item').removeClass('list-item');
      $('.material-icons').text('dashboard');
    }

    $('.navbar-btn').removeClass('fade-animation');
    $('.feed-item').removeClass('fade-animation');

    setTimeout(() => {
      $('.navbar-btn').addClass('fade-animation');
      $('.feed-item').addClass('fade-animation');
    }, 0);

    this.isGrid = !this.isGrid;
  }

  checkViewType() {
    setTimeout(() => {
      if(!this.isGrid) {
        $('.feed-item').removeClass('grid-item');
        $('.feed-item').addClass('list-item');
      } else {
        $('.feed-item').addClass('grid-item');
        $('.feed-item').removeClass('list-item');
      }
    }, 0);
  }
}

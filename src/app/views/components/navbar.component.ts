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

  //Constructor
  constructor(private appComponent: AppComponent) {
    setTimeout(() => { this.trigger(); }, 200);
  }

  //Functions
  switchSource(newSource: Source, event) {
    $('.selection-button').removeClass('active');
    $(`#${event.target.id}`).addClass('active');

    this.appComponent.refreshSource(newSource.url);

    setTimeout(() => { this.trigger(); }, 200);
  }

  changeViewType() {

  }

  trigger() {

  }
}

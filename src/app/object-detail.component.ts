import { Component, Input } from '@angular/core';
import { SampleObject } from './sampleobject';

@Component({
  // Template Name
  selector: 'object-detail',
  template: `
  <div *ngIf="object">
    <div class="object-container">
      <h2>{{object.title}} Details</h2>
      <input [(ngModel)]="object.desc" placeholder="description" />
      <h4>{{object.num}}</h4>
    </div>
  </div>
  `
})

export class ObjectDetailComponent {
  // Prefix with Input when using a form
  // Otherwise define the object to be bound
  @Input() object: SampleObject;
}

import { Component } from '@angular/core';
import { SampleObject } from './sampleobject';

const OBJECTS: SampleObject[] = [
  { title: 'object 1', desc: 'this is object 1', num: 3342 },
  { title: 'object 2', desc: 'this is object 2', num: 4553 },
  { title: 'object 3', desc: 'this is object 3', num: 8643 },
  { title: 'object 4', desc: 'this is object 4', num: 2249 },
  { title: 'object 5', desc: 'this is object 5', num: 8954 }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //Static Messages
  title = 'VWR';
  message = 'This is an RSS app designed to help learn Angular.';

  //Objects for data binding
  objects = OBJECTS;
  selectedObject: SampleObject;

  //Functions
  displayInfo(object: SampleObject): void {
    this.selectedObject = object;
  }
}

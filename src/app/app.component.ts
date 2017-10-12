import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { SampleObject } from './sampleobject';
import { ObjectService } from './object.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  //Constructor
  constructor(private objectService: ObjectService) { }

  //Interface implementation
  ngOnInit(): void {
    this.getObjects();
  }

  //Static Messages
  title = 'VWR';
  message = 'This is an RSS app designed to help learn Angular.';

  //Objects for data binding
  objects: SampleObject[];
  selectedObject: SampleObject;

  //Functions
  displayInfo(object: SampleObject): void {
    this.selectedObject = object;
  }

  getObjects(): void {
    this.objectService.getObjects().then(objects => this.objects = objects);
  }
}

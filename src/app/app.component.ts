import { Component } from '@angular/core';

//Custom Data Objects
export class SampleObject {
  title: string;
  desc: string;
  num: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //Static Messages
  title = 'VWR';
  message = 'This is an RSS app designed to help learn Angular.'

  //Object Exports
  object1: SampleObject = {
    title: 'Object 1',
    desc: 'This is the first object.',
    num: 442
  };

  object2: SampleObject = {
    title: 'Object 2',
    desc: 'This is the second object. Test.',
    num: 5335
  };
}

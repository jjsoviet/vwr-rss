import  { Injectable } from '@angular/core';
import { SampleObject } from './sampleobject';
import { OBJECTS } from './mock-objects';

@Injectable()
export class ObjectService {
  getObjects(): Promise<SampleObject[]> {
    return Promise.resolve(OBJECTS);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectService {

  constructor() { }

  getProject() {
    return "project from service";
  }

}

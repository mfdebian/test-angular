import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Array<string>;
  project: string;

  constructor() {
    this.projects = ['a project', 'another project']
  }

  ngOnInit() {
  }

  printProject(project) {
    console.log(project);
    this.project = project;
  }

}

import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../services/project.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Array<string>;
  project: string;

  constructor(
    private projectService: ProjectService,
  ) {
    this.projects = ['a project', 'another project']
  }

  getProjectFromService() {
    this.projects.push(this.projectService.getProject())
  }

  ngOnInit() {
    this.getProjectFromService()
  }

  printProject(project) {
    this.project = project;
  }

}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Project } from '../../models/project.model';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-recent-projects-list',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './recent-projects-list.component.html',
  styleUrl: './recent-projects-list.component.scss',
})
export class RecentProjectsListComponent implements OnInit {
  projects: Project[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.projects = this.dataService.getProjects();
  }
}

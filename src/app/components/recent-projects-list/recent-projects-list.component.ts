import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-recent-projects-list',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './recent-projects-list.component.html',
  styleUrl: './recent-projects-list.component.scss',
})
export class RecentProjectsListComponent {
  @Input() projects: Project[] = [];
}

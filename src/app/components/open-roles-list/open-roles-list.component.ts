import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OpenRole } from '../../models/open-role.model';
import { MatIconModule } from '@angular/material/icon';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-open-roles-list',
  imports: [CommonModule, MatIconModule],
  templateUrl: './open-roles-list.component.html',
  styleUrl: './open-roles-list.component.scss'
})
export class OpenRolesListComponent implements OnInit {
  openRoles: OpenRole[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.openRoles = this.dataService.getRoles();
  }
}

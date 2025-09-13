import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OpenRole, OpenRoleNoLink } from '../../models/open-role.model';
import { MatIconModule } from '@angular/material/icon';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-open-roles-list',
  imports: [CommonModule, MatIconModule],
  templateUrl: './open-roles-list.component.html',
  styleUrl: './open-roles-list.component.scss'
})
export class OpenRolesListComponent implements OnInit {
  // roles with external application links
  linkRoles: OpenRole[] = [];
  // roles displayed without a link
  noLinkRoles: OpenRoleNoLink[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // load grouped roles from data service
    this.noLinkRoles = this.dataService.getRolesNoLink();
    this.linkRoles = this.dataService.getRolesLink();
  }
}

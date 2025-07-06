import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { OpenRole } from './open-role.model';
import { MatIconModule } from '@angular/material/icon'; 

@Component({
  selector: 'app-open-roles-list',
  imports: [CommonModule, MatIconModule],
  templateUrl: './open-roles-list.component.html',
  styleUrl: './open-roles-list.component.scss'
})
export class OpenRolesListComponent {
  @Input() openRoles: OpenRole[] = [];
}

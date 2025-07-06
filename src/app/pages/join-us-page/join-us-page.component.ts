import { Component } from '@angular/core';
import { JoinUsHeaderComponent } from '../../components/join-us-header/join-us-header.component';
import { OpenRolesListComponent } from '../../components/open-roles-list/open-roles-list.component';
import { OpenRole } from '../../components/open-roles-list/open-role.model';

@Component({
  selector: 'app-join-us-page',
  standalone: true,
  imports: [JoinUsHeaderComponent, OpenRolesListComponent],
  templateUrl: './join-us-page.component.html',
  styleUrl: './join-us-page.component.scss'
})
export class JoinUsPageComponent {
  openRoles: OpenRole[] = [
    // {
    //   title: 'President',
    //   link: 'https://example.com'
    // },
    // {
    //   title: 'VP of Secretary', 
    //   link: 'https://example.com'
    // },
  ];
}

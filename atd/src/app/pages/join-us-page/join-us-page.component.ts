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
  // Sample data - this would typically come from a service
  openRoles: OpenRole[] = [
    {
      title: 'Frontend Developer',
      link: 'https://example.com/frontend-developer'
    },
    {
      title: 'UX/UI Designer', 
      link: 'https://example.com/ux-ui-designer'
    },
    {
      title: 'Marketing Specialist',
      link: 'https://example.com/marketing-specialist'
    }
  ];
}

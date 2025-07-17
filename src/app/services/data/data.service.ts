import { Injectable } from '@angular/core';

// Import models from their locations
import { Event } from '../../models/event.model';
import { Member } from '../../models/member.model';
import { Project } from '../../models/project.model';
import { OpenRole } from '../../models/open-role.model';
import { Content } from '../../models/content.model';

import eventsData from '../../../assets/data/events.json';
import membersData from '../../../assets/data/members.json';
import projectsData from '../../../assets/data/projects.json';
import rolesData from '../../../assets/data/roles.json';
import contentData from '../../../assets/data/content.json';

/**
 * DataService provides centralized access to all dynamic content data.
 * Club officers can update the JSON files directly to change website content.
 */
@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Get upcoming events for the home page
  getEvents(): Event[] {
    return eventsData as Event[];
  }

  // Get member list for the about us page
  getMembers(): Member[] {
    return membersData as Member[];
  }

  // Get recent projects for the our works page
  getProjects(): Project[] {
    return projectsData as Project[];
  }

  // Get open roles for the join us page
  getRoles(): OpenRole[] {
    return rolesData as OpenRole[];
  }


  // Get dynamic content (video URL, contact info, social media)
  getContent(): Content {
    return contentData as Content;
  }
}

import { Injectable } from '@angular/core';

import { Event } from '../../models/event.model';
import { Member } from '../../models/member.model';
import { Project } from '../../models/project.model';
import { OpenRole } from '../../models/open-role.model';
import { Content } from '../../models/content.model';
import { FaqItem } from '../../models/faq-item.model';
import { OfferItem } from '../../models/offer-item.model';

import eventsData from '../../../assets/data/events.json';
import membersData from '../../../assets/data/members.json';
import projectsData from '../../../assets/data/projects.json';
import rolesData from '../../../assets/data/roles.json';
import contentData from '../../../assets/data/content.json';
import faqData from '../../../assets/data/faq.json';
import offersData from '../../../assets/data/offers.json';
import galleryData from '../../../assets/data/gallery.json';

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

  // Get FAQ items for the main page
  getFaqItems(): FaqItem[] {
    return faqData as FaqItem[];
  }

  // Get dynamic content (video URL, contact info, social media)
  getContent(): Content {
    return contentData as Content;
  }

  // Get student offers for the what-we-offer component
  getStudentOffers(): OfferItem[] {
    return (offersData as any).studentOffers as OfferItem[];
  }

  // Get client offers for the what-we-offer component
  getClientOffers(): OfferItem[] {
    return (offersData as any).clientOffers as OfferItem[];
  }

  // Get gallery items for the our works mobile gallery
  getGalleryItems(): import('../../models/gallery-item.model').GalleryItem[] {
    return galleryData as import('../../models/gallery-item.model').GalleryItem[];
  }
}

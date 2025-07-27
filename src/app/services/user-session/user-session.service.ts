import { Injectable } from '@angular/core';
import { UserSessionData } from './user-session.model';

/**
 * Service to track user session state across the application.
 * Determines if user is on their first visit or navigating between pages.
 */
@Injectable({
  providedIn: 'root',
})
export class UserSessionService {
  private readonly storageKey = 'atd-user-session';
  private isInitialized = false;

  /**
   * Initialize session tracking - must be called in browser environment
   * This method should be called by the app component after platform check
   */
  initializeSession(): void {
    if (this.isInitialized) {
      return; // Prevent multiple initializations
    }
    
    this.isInitialized = true; // Setting this to true means we are in a browser environment
  }

  /**
   * Check if this is the user's first visit in the current browser session.
   * @returns true if first visit, false if user has navigated between pages.
   */
  isFirstVisit(): boolean {
    // Return true (safe default) if not initialized yet
    if (!this.isInitialized) {
      return true;
    }
    
    const sessionData = this.getSessionData();
    return sessionData ? sessionData.isFirstVisit : true;
  }

  /**
   * Mark that the user has visited the site and is no longer on first visit.
   * Call this after handling first-visit specific logic.
   */
  markAsVisited(): void {
    const updatedData: UserSessionData = {
      isFirstVisit: false,
    };

    this.setSessionData(updatedData);
  }

  /**
   * Get complete session data for analytics or debugging.
   * @returns Current session data or null if no session exists.
   */
  getSessionData(): UserSessionData | null {
    try {
      const data = sessionStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.warn('Error reading session data:', error);
      return null;
    }
  }

  /**
   * Store session data in sessionStorage.
   */
  private setSessionData(data: UserSessionData): void {
    try {
      sessionStorage.setItem(this.storageKey, JSON.stringify(data));
    } catch (error) {
      console.warn('Error storing session data:', error);
    }
  }
}

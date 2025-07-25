import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact-box',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-box.component.html',
  styleUrl: './contact-box.component.scss',
})
export class ContactBoxComponent {
  email: string = '';
  loading = false;
  statusMessage = '';
  statusClass = '';
  cooldownActive = false;
  private googleAppsScriptUrl =
    'https://script.google.com/macros/s/AKfycbxnJQBYNDfQF-ad_sUPCAR-7_kFAj7eyLAg4Kj-doSlSzWJ5ldJc5l8IJVT6GzdR0jJBg/exec';
  constructor(private http: HttpClient) {} // Inject HttpClient

  onSubmit() {
    if (this.loading || this.cooldownActive) return;

    this.statusMessage = '';
    this.statusClass = '';
    this.loading = false;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.statusMessage = 'Please enter a valid email address.';
      this.statusClass = 'error';
      this.autoClearStatus();
      return;
    }

    this.loading = true;
    const formData = new URLSearchParams();
    formData.set('email', this.email);

    this.http
      .post(this.googleAppsScriptUrl, formData.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        responseType: 'text',
      })
      .subscribe(
        (response) => {
          console.log('✅ Success:', response);
          this.statusMessage = 'Email submitted successfully!';
          this.statusClass = 'success';
          this.email = '';
          this.loading = false;
          this.cooldownActive = true;
          setTimeout(() => {
            this.cooldownActive = false;
          }, 1500);
          this.autoClearStatus();
        },
        (error) => {
          console.error('❌ Error:', error);
          this.statusMessage = 'There was an error submitting your email.';
          this.statusClass = 'error';
          this.loading = false;
          this.cooldownActive = true;
          setTimeout(() => {
            this.cooldownActive = false;
          }, 1500);
          this.autoClearStatus();
        }
      );
  }

  private statusTimeoutId: any;

  private autoClearStatus() {
    if (this.statusTimeoutId) {
      clearTimeout(this.statusTimeoutId);
    }

    this.statusTimeoutId = setTimeout(() => {
      this.statusClass += ' fade-out';
      setTimeout(() => {
        this.statusMessage = '';
        this.statusClass = '';
        this.statusTimeoutId = null;
      }, 300); // duration of fade out animation
    }, 3000);
  }
}

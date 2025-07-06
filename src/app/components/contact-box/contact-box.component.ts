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
  private googleAppsScriptUrl =
    'https://script.google.com/macros/s/AKfycbxnJQBYNDfQF-ad_sUPCAR-7_kFAj7eyLAg4Kj-doSlSzWJ5ldJc5l8IJVT6GzdR0jJBg/exec';
  constructor(private http: HttpClient) {} // Inject HttpClient

  onSubmit() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      alert('Please enter a valid email address.');
      return;
    }

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
          alert('Email submitted successfully!');
          this.email = '';
        },
        (error) => {
          console.error('❌ Error:', error);
          alert('There was an error submitting your email.');
        }
      );
  }
}

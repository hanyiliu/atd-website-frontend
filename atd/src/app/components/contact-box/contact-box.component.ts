import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-box',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-box.component.html',
  styleUrl: './contact-box.component.scss',
})
export class ContactBoxComponent {
  email: string = '';

  onSubmit() {
    console.log('Email submitted:', this.email);
  }
}

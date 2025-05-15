import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-box.component.html',
  styleUrl: './contact-box.component.scss',
})
export class ContactBoxComponent {
  email: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() description2: string = '';

  onSubmit() {
    console.log('Email submitted:', this.email);
  }
}

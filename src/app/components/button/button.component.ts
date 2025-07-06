import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'; // to navigate to different page when button clicked

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() backgroundColor: string = '';
  @Input() borderColor: string = '';
  @Input() textColor: string = '';
  @Input() isActive: boolean = false;
  @Output() buttonClick = new EventEmitter<void>(); // Add EventEmitter for click events

  onButtonClick() {
    this.buttonClick.emit(); // Emit the click event to parent component
  }

  toggleActive() {
    if (this.isActive !== undefined) {
      this.isActive = !this.isActive;
    }
  }
}

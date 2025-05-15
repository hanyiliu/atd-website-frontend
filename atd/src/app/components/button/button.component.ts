import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
  @Input() route: string = ''; //routes page to about section of website
  @Input() onClick: () => void = () => {}; //dont fully understand this line

  constructor(private router: Router) {} //Why do we need this?

  navigate() {
    this.router.navigate([this.route]);
  }
}

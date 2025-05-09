import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'; // to navigate to different page when button clicked

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = 'About Us';
  @Input() route: string = '/about'; //routes page to about section of website
  @Input() primary: boolean = false;
  @Input() size: string = 'medium';
  @Input() onClick: () => void = () => {} //dont fully understand this line
  @Input() backgroundColor: string = '#000000';


  constructor(private router: Router){} //Why do we need this?

  navigate() {
    this.router.navigate([this.route]);
  }
}

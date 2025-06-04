import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-herosection',
  imports: [ButtonComponent],
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.scss'
})
export class HeroSectionComponent {

  onButtonClick() {
    console.log('Learn More clicked');
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-herosection',
  imports: [],
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.scss'
})
export class HeroSectionComponent {

  onButtonClick() {
    console.log('Learn More clicked');
  }
}

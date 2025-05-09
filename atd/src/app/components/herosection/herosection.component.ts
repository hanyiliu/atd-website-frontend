import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-herosection',
  imports: [],
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.scss'
})
export class HerosectionComponent {
  @Input() preTitle: string = 'We Are,'; 
  @Input() title: string = 'All Things Design';
  @Input() buttonText: string = 'Learn More';
  @Input() backgroundImage: string = 'assets/images/hero.svg';

  onButtonClick() {
    console.log('Learn More clicked');
  }
}

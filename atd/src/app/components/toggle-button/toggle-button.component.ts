import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent {
  selected: 'clients' | 'students' = 'clients';

  select(option: 'clients' | 'students'): void {
    this.selected = option;
  }
}

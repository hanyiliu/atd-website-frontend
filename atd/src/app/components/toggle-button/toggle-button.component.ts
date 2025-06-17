import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
})
export class ToggleButtonComponent {
  selected: 'clients' | 'students' = 'clients';

  @Output() selectionChanged = new EventEmitter<'clients' | 'students'>();

  select(option: 'clients' | 'students'): void {
    this.selected = option;
    this.selectionChanged.emit(this.selected);
  }
}

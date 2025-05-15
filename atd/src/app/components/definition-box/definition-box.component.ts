import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-definition-box',
  imports: [],
  standalone: true,
  templateUrl: './definition-box.component.html',
  styleUrl: './definition-box.component.scss',
})
export class DefinitionBoxComponent {
  @Input() title: string = '';
  @Input() bracket1: string = '';
  @Input() noun: string = '';
  @Input() bracket2: string = '';
  @Input() definition: string = '';
}

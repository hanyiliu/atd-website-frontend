import { Component, Input } from '@angular/core';
import { Member } from './member.model';

@Component({
  selector: 'app-member-component',
  imports: [],
  templateUrl: './member-component.component.html',
  styleUrl: './member-component.component.scss',
})
export class MemberComponentComponent {
  @Input() member: Member = {
    image: '',
    title: '',
    name: '',
  };
}

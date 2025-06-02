import { Component, Input } from '@angular/core';
import { Member } from '../member-component/member.model';

@Component({
  selector: 'app-team-component',
  imports: [],
  templateUrl: './team-component.component.html',
  styleUrl: './team-component.component.scss',
})
export class TeamComponentComponent {
  @Input() members: Member[] = [];
}

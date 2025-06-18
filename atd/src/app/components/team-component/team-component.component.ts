import { Component, Input } from '@angular/core';
import { Member } from '../member-component/member.model';
import { MemberComponentComponent } from '../member-component/member-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team-component',
  standalone: true,
  imports: [MemberComponentComponent, CommonModule],
  templateUrl: './team-component.component.html',
  styleUrls: ['./team-component.component.scss'],
})
export class TeamComponentComponent {
  @Input() members: Member[] = [];
}

import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member.model';
import { MemberComponentComponent } from '../member-component/member-component.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-team-component',
  standalone: true,
  imports: [MemberComponentComponent, CommonModule],
  templateUrl: './team-component.component.html',
  styleUrls: ['./team-component.component.scss'],
})
export class TeamComponentComponent implements OnInit {
  members: Member[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.members = this.dataService.getMembers();
  }
}

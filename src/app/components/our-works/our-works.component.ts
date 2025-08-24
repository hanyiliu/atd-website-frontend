import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-our-works',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './our-works.component.html',
  styleUrl: './our-works.component.scss',
})
export class OurWorksComponent implements OnInit {
  frame9: string = '';
  frame10: string = '';
  frame11: string = '';
  frame12: string = '';
  frame13: string = '';
  frame14: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    const content = this.dataService.getContent();
    this.frame9 = content.frame9;
    this.frame10 = content.frame10;
    this.frame11 = content.frame11;
    this.frame12 = content.frame12;
    this.frame13 = content.frame13;
    this.frame14 = content.frame14;
  }
}

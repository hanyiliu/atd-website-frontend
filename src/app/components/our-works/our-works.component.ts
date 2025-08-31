import { Component, OnInit } from '@angular/core';
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
  ngOnInit(): void {}
}

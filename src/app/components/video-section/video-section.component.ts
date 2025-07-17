import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-video-section',
  imports: [],
  templateUrl: './video-section.component.html',
  styleUrl: './video-section.component.scss'
})
export class VideoSectionComponent implements OnInit {
  videoUrl: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    const content = this.dataService.getContent();
    this.videoUrl = content.videoUrl;
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  skills = [
    { name: 'Angular', percentage: 95 },
    { name: 'TypeScript', percentage: 90 },
    { name: 'Node.js', percentage: 85 },
    { name: 'Python', percentage: 80 },
    { name: 'AWS', percentage: 75 }
  ];
}
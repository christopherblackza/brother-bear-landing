import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  status: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'Meetro — Social Travel App',
      description: 'Designed and developed cross-platform mobile app connecting global travelers through shared itineraries. Integrated Supabase backend for user authentication, data storage, and chat. Built NestJS API for real-time communication and location-based social discovery.',
      status: 'Personal Project',
      image: 'https://placehold.co/600x400/1e40af/ffffff?text=Meetro',
      link: 'https://meetro.app'
    },
    {
      title: 'Bravo Events',
      description: 'Event Management SaaS - Create and manage events easily and connect with event vendors, organisers and attendees.',
      status: 'SaaS Product',
      image: 'https://placehold.co/600x400/f97316/ffffff?text=Bravo+Events',
      link: 'https://bravoevents.io'
    }
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin-in',
      url: 'https://www.linkedin.com/in/upgradedspicy/',
      color: '#0077b5'
    },
    {
      name: 'Email',
      icon: 'fas fa-envelope',
      url: 'mailto:christopher.black.sa@gmail.com',
      color: '#ea4335'
    }
  ];
  
  quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];
  
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
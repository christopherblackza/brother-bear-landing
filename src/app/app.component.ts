import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ServicesComponent, FooterComponent, AboutComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Brother Bear Software';
  isMenuOpen = false;

  get currentYear(): number {
    return new Date().getFullYear();
  }

  // Remove skills array since it's now in AboutComponent
  
  services = [
    { name: 'Angular', percentage: 85 },
    { name: 'Ionic', percentage: 80 },
    { name: 'Express', percentage: 75 },
    { name: 'Node.js', percentage: 70 },
    { name: 'MongoDB', percentage: 70 },
    { name: 'MySQL', percentage: 70 }
  ];

  projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with Angular frontend and Node.js backend.',
      status: 'Coming Soon',
      image: 'https://via.placeholder.com/400x250/1e40af/ffffff?text=E-Commerce+Platform'
    },
    {
      title: 'Mobile App Development',
      description: 'Cross-platform mobile application built with Ionic and Angular.',
      status: 'Coming Soon',
      image: 'https://via.placeholder.com/400x250/64748b/ffffff?text=Mobile+App'
    },
    {
      title: 'API Management System',
      description: 'Comprehensive API management and monitoring dashboard.',
      status: 'Coming Soon',
      image: 'https://via.placeholder.com/400x250/f97316/ffffff?text=API+System'
    }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

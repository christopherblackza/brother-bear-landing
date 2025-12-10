import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ServicesComponent, FooterComponent, AboutComponent, ContactComponent, PortfolioComponent],
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

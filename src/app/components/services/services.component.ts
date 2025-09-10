import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  @Input() services: Service[] = [];

  // Enhanced services with more details
  defaultServices: Service[] = [
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies and best practices.',
      icon: 'fas fa-code',
      features: ['Angular & React', 'Progressive Web Apps', 'Responsive Design', 'Performance Optimization']
    },
    {
      title: 'Custom Software',
      description: 'Tailored software solutions designed to streamline your business processes and boost productivity.',
      icon: 'fas fa-cogs',
      features: ['Business Analysis', 'Custom Development', 'System Integration', 'Scalable Architecture']
    },
    {
      title: 'API Development',
      description: 'Robust RESTful APIs and microservices that power your applications with seamless data flow.',
      icon: 'fas fa-plug',
      features: ['RESTful APIs', 'Microservices', 'Database Design', 'Third-party Integrations']
    },
    {
      title: 'Technical Consulting',
      description: 'Expert guidance on technology decisions, architecture planning, and development best practices.',
      icon: 'fas fa-lightbulb',
      features: ['Architecture Review', 'Technology Stack', 'Code Audits', 'Performance Analysis']
    }
  ];

  get displayServices(): Service[] {
    return this.services.length > 0 ? this.services : this.defaultServices;
  }
}
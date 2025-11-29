import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
 projects = [
  {
    title: 'E-Waste Recycling Platform',
    description: 'A comprehensive system for managing electronic waste from collection to recycling.GPS tracking, real-time monitoring, Material Recovery optimization, Regulatory compliance',
    technologies: ['Angular', 'TypeScript', 'REST API', 'Material Design'],
    icon: '♻️',
    color: '#fff'
  },
  {
    title: 'Plastic Waste Management System',
    description: 'Platform for tracking and managing plastic waste. Includes automated categorization, collection scheduling, awareness campaigns, and analytics dashboard for recycling trends.',
    technologies: ['Angular', 'Node.js', 'HighCharts', 'Chart.js'],
    icon: '🔄',
    color: '#fff'
  },
  {
    title: 'Glass Waste Collection Tracker',
    description: 'Smart system for monitoring glass waste collection and processing. Features mobile responsiveness, GPS-enabled collection tracking, and automated notifications for stakeholders.',
    technologies: ['Angular', 'TypeScript', 'REST API', 'Material Design'],
    icon: '🍃',
    color: '#fff'
  },
  {
    title: 'Battery Waste Disposal & Awareness',
    description: 'User-friendly platform for safe battery disposal and recycling. Provides collection point locator, educational resources on environmental impact, and reporting tools for compliance.',
    technologies: ['Angular', 'TypeScript', 'Leaflet Maps', 'Chart.js'],
    icon: '🔋',
    color: '#fff'
  }
];

}


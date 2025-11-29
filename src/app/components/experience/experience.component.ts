import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experience = {
    years: 6,
    company: 'Karo Sambhav Private Limited',
    location: 'Bangalore, KA',
    position: 'Senior Front-End Developer', 
    period: 'Oct 2018 – Present',
    description: 'A key contributor specializing in architecting and deploying scalable, high-performance Angular applications for environmental sustainability and compliance tracking.',
    achievements: [
      'Spearheaded development for 4 concurrent E-Waste and Plastic Waste Management platforms using Angular (v14+), NgRx, and TypeScript.',
      'Optimized application performance through strategic implementation of lazy loading and caching, resulting in a **20% average reduction in initial load time**.',
      'Engineered sophisticated data visualization modules (HighCharts/Chart.js) to deliver real-time reports and insights for stakeholders.',
      'Collaborated with Back-End teams to define and securely consume **RESTful APIs** while integrating **JWT Authentication**.',
      'Implemented robust **Unit Testing** (Jasmine/Karma) and code review standards, reducing critical production bugs by **15%**.',
      'Managed project timelines and deliverables for all 4 projects within Agile/Scrum methodologies, consistently exceeding quality expectations.',
      'Ensured all web applications were fully **mobile-first responsive** and maintained high compatibility across different browsers and devices (HTML5, SCSS, Bootstrap).'
    ]
};
}


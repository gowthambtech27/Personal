import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = {
    years: 6,
    company: 'Karo Sambhav Private Limited',
    location: 'Bangalore, KA',
    position: 'Front-End Developer', 
    period: 'Oct 2018 – Present',
    description: 'A key contributor specializing in architecting and deploying scalable, high-performance Angular applications for environmental sustainability and compliance tracking.',
  achievements: [
  'Lead the development of <b>4 high-impact Angular (v14+)</b> applications, utilizing <b>NgRx</b> and <b>TypeScript</b> to deliver scalable solutions for multiple concurrent projects.',
  'Enhanced application performance through strategic <b>lazy loading</b> and caching, achieving a <b>20% faster initial load time</b>, improving overall user experience.',
  'Designed and implemented advanced data visualization modules using <b>HighCharts</b> and <b>Chart.js</b> to provide actionable real-time insights for stakeholders.',
  'Collaborated effectively with Back-End teams to integrate secure <b>RESTful APIs</b> and implement <b>JWT Authentication</b>, ensuring robust and secure data management.',
  'Established and maintained rigorous <b>Unit Testing</b> practices (Jasmine/Karma) and code reviews, reducing critical production issues by <b>15%</b>.',
  'Managed project timelines and deliverables within <b>Agile/Scrum</b> frameworks, consistently achieving milestones ahead of schedule and exceeding quality standards.',
  'Delivered fully responsive, cross-browser compatible web applications using <b>HTML5</b>, <b>SCSS</b>, <b>Bootstrap</b>, enhancing accessibility and usability across devices.'
]


};
}


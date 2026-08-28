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
  position: 'Senior Software Engineer',
  period: 'Oct 2018 – Present',
  description:
    'Results-driven Front-End Developer with extensive experience in architecting, optimizing, and delivering scalable enterprise-grade Angular applications for sustainability, compliance management, and digital transformation initiatives. Proven expertise in building high-performance, secure, and user-centric web platforms with a strong focus on scalability, maintainability, and seamless user experience.',

  achievements: [
    'Spearheaded the design and development of <b>4 enterprise-scale Angular (v14+)</b> applications, leveraging <b>TypeScript</b>, <b>RxJS</b>, and <b>NgRx</b> to deliver highly scalable and maintainable solutions across multiple business-critical projects.',
    
    'Boosted application performance by implementing <b>lazy loading</b>, code optimization, and intelligent caching strategies, improving <b>initial load time by 20%</b> and enhancing overall system responsiveness.',

    'Engineered dynamic <b>real-time data visualization dashboards</b> using <b>HighCharts</b> and <b>Chart.js</b>, enabling stakeholders to make data-driven decisions through actionable business insights.',

    'Collaborated cross-functionally with Back-End teams to integrate secure <b>REST APIs</b>, implement <b>JWT-based Authentication</b>, and ensure reliable, scalable, and secure data communication.',

    'Established robust <b>unit testing</b> and quality assurance standards using <b>Jasmine</b> and <b>Karma</b>, reducing production defects by <b>15%</b> and improving release stability.',

    'Mentored junior developers and coordinated deliverables within <b>Agile/Scrum</b> environments, successfully driving sprint execution, improving team productivity, and ensuring timely project delivery.',

    'Developed <b>responsive, cross-browser compatible, and accessibility-focused</b> web applications using <b>HTML5</b>, <b>SCSS</b>, and <b>Bootstrap</b>, delivering consistent user experiences across devices and platforms.',

    'Acted as a key contributor in application architecture decisions, code reviews, performance tuning, and reusable component development to improve code quality and long-term maintainability.'
  ]
};
}


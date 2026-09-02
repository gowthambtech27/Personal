import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
experiences = {
  years: 7,
  company: 'Karo Sambhav Private Limited',
  location: 'Bangalore, Karnataka',
  position: 'Senior Software Engineer',
  period: 'Oct 2018 – Present',

  description:
    'Senior Software Engineer and Front-End Developer with 7+ years of experience designing, developing, and optimizing scalable enterprise-grade web applications using Angular, TypeScript, JavaScript, RxJS, and NgRx. Experienced in building high-performance applications for sustainability, compliance management, recycling, and digital transformation platforms, with a strong focus on application architecture, performance optimization, reusable components, data visualization, security, and maintainable code.',

  achievements: [
    'Architected and developed <b>4 enterprise-scale Angular applications</b> using <b>Angular v14+</b>, <b>TypeScript</b>, <b>RxJS</b>, and <b>NgRx</b>, delivering scalable, modular, and maintainable solutions for business-critical platforms.',

    'Improved application performance by implementing <b>lazy loading</b>, optimized change detection, code splitting, reusable components, and caching strategies, achieving up to <b>20% improvement in initial application load time</b>.',

    'Designed and developed <b>real-time data visualization dashboards</b> using <b>Highcharts</b> and <b>Chart.js</b>, transforming complex business data into actionable insights for operational and management teams.',

    'Integrated and consumed secure <b>RESTful APIs</b> and collaborated closely with Back-End teams to implement reliable data flows, <b>JWT-based authentication</b>, authorization, error handling, and secure client-server communication.',

    'Developed reusable and configurable <b>Angular components, services, directives, pipes, and shared modules</b>, reducing code duplication and improving application maintainability across multiple projects.',

    'Implemented comprehensive <b>unit testing</b> using <b>Jasmine</b> and <b>Karma</b>, strengthening application reliability and contributing to a <b>15% reduction in production defects</b>.',

    'Led <b>code reviews, technical discussions, debugging, performance optimization, and application architecture decisions</b>, ensuring adherence to coding standards, scalability, and long-term maintainability.',

    'Mentored junior developers and supported team members through technical guidance, knowledge sharing, code reviews, and best practices within <b>Agile/Scrum</b> development environments.',

    'Built <b>responsive, cross-browser compatible, and accessibility-focused</b> user interfaces using <b>HTML5</b>, <b>SCSS</b>, <b>Bootstrap</b>, JavaScript, and TypeScript, ensuring consistent experiences across desktop, tablet, and mobile devices.',

    'Collaborated with Product, Back-End, QA, and Business teams throughout the <b>SDLC</b>, from requirement analysis and technical design through development, testing, deployment, and production support.',

    'Contributed to enterprise applications focused on <b>e-waste management, battery recycling, compliance management, producer awareness, collection, recycler verification, and sustainability workflows</b>.',

    'Worked extensively with <b>Git-based version control</b>, branching strategies, pull requests, code reviews, and collaborative development practices to maintain high-quality and production-ready releases.'
  ]
};

}


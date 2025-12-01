import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
  { name: 'Angular (2+)', level: 95, icon: 'fab fa-angular' },
  { name: 'TypeScript', level: 95, icon: 'fab fa-js' }, // FA doesn't have TS icon, can use JS or custom
  { name: 'JavaScript (ES6+)', level: 95, icon: 'fab fa-js' },
  { name: 'HTML5', level: 98, icon: 'fab fa-html5' },
  { name: 'CSS3 / SCSS', level: 95, icon: 'fab fa-css3-alt' },
  { name: 'Bootstrap', level: 90, icon: 'fab fa-bootstrap' },
  { name: 'JSON/XML/XSLT', level: 85, icon: 'fas fa-file-code' },
  { name: 'RxJS', level: 90, icon: 'fas fa-sync-alt' },
  { name: 'NgRx', level: 85, icon: 'fas fa-box-open' },
  { name: 'HighCharts / Chart.js', level: 88, icon: 'fas fa-chart-bar' },
  { name: 'RESTful APIs', level: 92, icon: 'fas fa-network-wired' },
  { name: 'JWT Authentication', level: 90, icon: 'fas fa-key' },
  { name: 'Git / GitHub', level: 95, icon: 'fab fa-github' },
  { name: 'Postman', level: 90, icon: 'fas fa-envelope' },
  { name: 'VS Code / WebStorm', level: 92, icon: 'fas fa-laptop-code' },
  { name: 'Unit Testing', level: 85, icon: 'fas fa-vial' },
  { name: 'Performance Optimization', level: 90, icon: 'fas fa-bolt' },
  { name: 'Responsive Design', level: 95, icon: 'fas fa-mobile-alt' }
];

}


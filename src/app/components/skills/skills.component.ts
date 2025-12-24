import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
skills = [
  { name: 'Angular', version: 'v14+', level: 95, icon: 'fab fa-angular' },
  { name: 'TypeScript', version: 'v5.2.2', level: 95, icon: 'fab fa-js' }, // FA fallback icon
  { name: 'JavaScript', version: 'ES6+', level: 95, icon: 'fab fa-js' },
  { name: 'HTML5', version: 'HTML5', level: 98, icon: 'fab fa-html5' },
  { name: 'CSS3 / SCSS', version: '', level: 95, icon: 'fab fa-css3-alt' },
  { name: 'Bootstrap', version: 'v5.3', level: 90, icon: 'fab fa-bootstrap' },
  { name: 'JSON / XML / XSLT', version: '1.2+', level: 85, icon: 'fas fa-file-code' },
  { name: 'RxJS', version: 'v7.5.5', level: 90, icon: 'fas fa-sync-alt' },
  { name: 'NgRx', version: 'v16+', level: 85, icon: 'fas fa-box-open' },
  { name: 'HighCharts / Chart.js', version: 'HC 11 / CJ 4.5.1', level: 88, icon: 'fas fa-chart-bar' },
  { name: 'RESTful APIs', version: 'REST', level: 92, icon: 'fas fa-network-wired' },
  { name: 'JWT Authentication', version: 'RFC 7519', level: 90, icon: 'fas fa-key' },
  { name: 'Git / GitHub', version: 'Git v2.5.1', level: 95, icon: 'fab fa-github' },
  { name: 'Postman', version: 'v10+', level: 90, icon: 'fas fa-envelope' },
  { name: 'VS Code / WebStorm', version: 'v1.107.1', level: 92, icon: 'fas fa-laptop-code' },
  { name: 'Unit Testing', version: '', level: 85, icon: 'fas fa-vial' },
  { name: 'Performance Optimization', version: 'Web', level: 90, icon: 'fas fa-bolt' },
  { name: 'Responsive Design', version: 'Mobile-First', level: 95, icon: 'fas fa-mobile-alt' }
];


}


import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    { name: 'Angular (2+)', level: 95, icon: '🅰️' },
    { name: 'TypeScript', level: 95, icon: '📘' },
    { name: 'JavaScript (ES6+)', level: 95, icon: '⚡' },
    { name: 'HTML5', level: 98, icon: '🔷' },
    { name: 'CSS3 / SCSS', level: 95, icon: '🎨' },
    { name: 'Bootstrap', level: 90, icon: '💅' },
    { name: 'JSON/XML/XSLT', level: 85, icon: '📄' },
    { name: 'RxJS', level: 90, icon: '🔄' },
    { name: 'NgRx', level: 85, icon: '📦' },
    { name: 'HighCharts / Chart.js', level: 88, icon: '📊' },
    { name: 'RESTful APIs', level: 92, icon: '🌐' },
    { name: 'JWT Authentication', level: 90, icon: '🔐' },
    { name: 'Git / GitHub', level: 95, icon: '🔀' },
    { name: 'Postman', level: 90, icon: '📮' },
    { name: 'VS Code / WebStorm', level: 92, icon: '💻' },
    { name: 'Unit Testing', level: 85, icon: '🧪' },
    { name: 'Performance Optimization', level: 90, icon: '⚡' },
    { name: 'Responsive Design', level: 95, icon: '📱' }
  ];
}


import { Component } from '@angular/core';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css']
})
export class SoftSkillsComponent {
softSkills = [
  { name: 'Presentation', icon: 'fas fa-chalkboard-teacher' },
  { name: 'Planning', icon: 'fas fa-calendar-check' },
  { name: 'Organized', icon: 'fas fa-tasks' },
  { name: 'Creative Problem-Solving', icon: 'fas fa-lightbulb' },
  { name: 'Teamwork', icon: 'fas fa-users' },
  { name: 'Active Listening', icon: 'fas fa-ear-listen' }, // FA 6 icon
  { name: 'Adaptability', icon: 'fas fa-shuffle' },
  { name: 'Analytical Thinking', icon: 'fas fa-brain' }
];

}


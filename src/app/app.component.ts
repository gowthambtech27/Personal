// app.component.ts or each page component
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Gowtham Palanichamy - Angular Developer');
    this.meta.addTags([
      { name: 'description', content: 'Gowtham Palanichamy – Angular Developer with 6+ years of experience.' },
      { name: 'keywords', content: 'Angular, JavaScript, Front-End Developer, Portfolio' },
      { name: 'author', content: 'Gowtham Palanichamy' },
    ]);
  }
}

import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(
    private meta: Meta,
    private title: Title
  ) {
    this.setSeo();
  }

  private setSeo(): void {

    this.title.setTitle(
      'Gowtham Palanichamy | Senior Software Engineer | Angular Developer'
    );

    this.meta.updateTag({
      name: 'description',
      content:
        'Gowtham Palanichamy is a Senior Software Engineer and Angular Developer with 7+ years of experience building scalable enterprise web applications using Angular, TypeScript, JavaScript, RxJS, NgRx and REST APIs.'
    });

    this.meta.updateTag({
      name: 'author',
      content: 'Gowtham Palanichamy'
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow'
    });
  }
}
import { Component, HostListener, OnInit } from '@angular/core';

interface Section {
  id: string;
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isMenuOpen = false;
  isDarkTheme = true;


  // Dynamic sections (can replace with Firebase later)
  sections: Section[] = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'experience', name: 'Experience' },
    { id: 'skills', name: 'Skills' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' },
  ];

  ngOnInit(): void { }

  // Detect scroll to add scrolled class
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  // Toggle mobile menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Smooth scroll to section
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.isMenuOpen = false; // Close mobile menu after click
    }
  }
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;

    document.body.classList.toggle('light-theme', !this.isDarkTheme);
  }
  openResume(event: Event) {
    event.preventDefault();
    const resumeWindow = window.open(
      'assets/gowtham_resume.pdf',
      '_blank'
    );

    // Close after 7 seconds
    setTimeout(() => {
      resumeWindow?.close();
    }, 7000);
  }

}

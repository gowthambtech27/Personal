import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  currentYear = new Date().getFullYear();

  contactInfo = {
    email: {
      value: 'gowthampalanichamyy@gmail.com',
      icon: 'fas fa-envelope'
    },
    phone: {
      value: '+918660464527',
      icon: 'fas fa-phone'
    },
    location: {
      value: 'Bangalore, Karnataka, India',
      icon: 'fas fa-location-dot'
    },
    linkedin: {
      value: 'www.linkedin.com/in/gowtham-palanichamy',
      icon: 'fab fa-linkedin'
    }
  };
  lastVisit: Date | null = null;

  ngOnInit(): void {
    // Get last visit from localStorage
    const lastVisitStored = localStorage.getItem('lastVisit');
    if (lastVisitStored) {
      this.lastVisit = new Date(lastVisitStored);
    }

    // Save current visit
    localStorage.setItem('lastVisit', new Date().toISOString());
  }


  onSubmit() {
    // Handle form submission
    alert('Thank you for your message! I will get back to you soon.');
  }
}


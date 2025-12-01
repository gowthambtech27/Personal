import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
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


  onSubmit() {
    // Handle form submission
    alert('Thank you for your message! I will get back to you soon.');
  }
}


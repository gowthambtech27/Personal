import { Component } from '@angular/core';

interface ContactItem {
  type: 'email' | 'phone' | 'link' | 'text';
  value: string;
  icon: string;
  label?: string;
  display?: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  currentYear = new Date().getFullYear();

  contactInfo: ContactItem[] = [
    {
      type: 'email',
      value: 'gowthampalanichamyy@gmail.com',
      icon: 'fas fa-envelope'
    },
    {
      type: 'phone',
      value: '+918660464527',
      display: '+91 86604 64527',
      icon: 'fas fa-phone'
    },
    {
      type: 'text',
      value: 'Bangalore, Karnataka, India',
      icon: 'fas fa-location-dot'
    },
    {
      type: 'link',
      value: 'https://www.linkedin.com/in/gowtham-palanichamy',
      label: 'LinkedIn Profile',
      icon: 'fab fa-linkedin'
    }
  ];

}

// homepage.component.ts

import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  services = [
    { icon: 'computer', title: 'Software Development', description: 'We offer custom software development services.' },
    { icon: 'settings', title: 'IT Consulting', description: 'Our experts provide top-notch IT consulting services.' },
    { icon: 'cloud', title: 'Cloud Solutions', description: 'We deliver scalable cloud solutions to meet your business needs.' }
  ];

  constructor() {}
}

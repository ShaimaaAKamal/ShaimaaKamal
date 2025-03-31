import { Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  ngAfterViewInit() {
    new Typed('.typing-element', {
      strings: ['A Full Stack Developer !','Bringing ideas to life with code & design', 'A UI/UX Designer !','Let’s build something amazing!'],
      typeSpeed: 30,
      backSpeed: 30,
      startDelay: 500,
      backDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '█',
    });
  }

  sendMail() {
  window.location.href = 'mailto:shaimaa.a.kamal.m@gmail.com?subject=Inquiry&body=Hello, I would like to know more about your services.';
  }

  downloadCV() {
  const link = document.createElement('a');
  link.href = 'assets/Files/Shaimaa Kamal.pdf';
  link.download = 'Shaimaa_Kamal_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// openCV() {
//   window.open('assets/Files/Shaimaa Kamal.pdf', '_blank');
// }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-social-links',
  standalone: false,

  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss'
})
export class SocialLinksComponent {
sendWhatsAppMessage() {
  const phoneNumber = '201020414320';
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent('')}`;
  window.open(url, '_blank');
}
}

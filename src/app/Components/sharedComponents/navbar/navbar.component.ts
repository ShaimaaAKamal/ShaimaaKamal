import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
 navActive = false;

 showNav(){
    this.navActive = !this.navActive;
 }

//     toggleNav() {
//         this.navActive = !this.navActive;
//     }
}

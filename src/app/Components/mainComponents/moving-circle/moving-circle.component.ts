import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import gsap from 'gsap';
@Component({
  selector: 'app-moving-circle',
  standalone: false,

  templateUrl: './moving-circle.component.html',
  styleUrl: './moving-circle.component.scss'
})
export class MovingCircleComponent {
  private fixedCircle!: HTMLElement; // Store reference to fixed circle

  constructor(private renderer:Renderer2,private el:ElementRef){}

   ngAfterViewInit() {
    this.createFixedCircle();
  }

  createFixedCircle() {
    this.fixedCircle = this.renderer.createElement('div');
    this.renderer.addClass(this.fixedCircle, 'circle');
    this.renderer.setStyle(this.fixedCircle, 'left', `-50px`);
    this.renderer.setStyle(this.fixedCircle, 'top', `-50px`);
    document.body.appendChild(this.fixedCircle);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.createMovingCircles(event.clientX, event.clientY);
  }

  // createMovingCircles(x: number, y: number) {
  //   const circles: HTMLElement[] = [];

  //   // Move the fixed circle to the cursor position
  //   gsap.to(this.fixedCircle, {
  //     x: x - 20,
  //     y: y - 20,
  //     duration: .6,
  //     ease:'power2.out'
  //   });

  //   for (let i = 0; i < 2; i++) { // Create 5 new circles
  //     const circle = this.renderer.createElement('div');
  //     this.renderer.addClass(circle, 'circle');
  //     this.renderer.setStyle(circle, 'left', `${x}px`);
  //     this.renderer.setStyle(circle, 'top', `${y}px`);
  //     document.body.appendChild(circle);
  //     circles.push(circle);
  //   }

  //   // Animate all circles outward
  //   circles.forEach(circle => {
  //     gsap.to(circle, {
  //       x: (Math.random() - 0.5) * 200,
  //       y: (Math.random() - 0.5) * 200,
  //       opacity: 0,
  //       scale: 0,
  //       duration: 2.5,
  //       ease: 'power2.out',
  //       onComplete: () => {
  //         document.body.removeChild(circle);
  //       }
  //     });
  //   });
  // }

createMovingCircles(x: number, y: number) {
  const circles: HTMLElement[] = [];

  // Move the fixed circle to the cursor position
  gsap.to(this.fixedCircle, {
    x: x - 20,
    y: y - 20,
    duration: 0.6,
    ease: 'power2.out'
  });

  for (let i = 0; i < 2; i++) { // Create 2 new circles
    const circle = this.renderer.createElement('div');
    this.renderer.addClass(circle, 'circle');
    this.renderer.setStyle(circle, 'left', `${x}px`);
    this.renderer.setStyle(circle, 'top', `${y}px`);
    document.body.appendChild(circle);
    circles.push(circle);
  }

  // Animate all circles outward with larger splits
  circles.forEach(circle => {
    gsap.to(circle, {
      x: (Math.random() - 0.5) * 2000, // Increase the range for larger splits
      y: (Math.random() - 0.5) * 2000, // Increase the range for larger splits
      opacity: 0,
      scale: 0,
      duration: 2.5,
      ease: 'power2.out',
      onComplete: () => {
        document.body.removeChild(circle);
      }
    });
  });
}
}

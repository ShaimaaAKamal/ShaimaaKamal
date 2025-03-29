import { Component } from '@angular/core';
import { ISourceOptions, tsParticles} from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  particlesOptions: ISourceOptions = {
  particles: {
    number: {
      value: 10,
      density: {
        enable: false,
      },
    },
    color: {
      value: "#fff",
    },
    shape: {
      type: "circle",
      options: {
        polygon: {
          sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
    },
    opacity: {
      value: 0.2,
      animation: {
        enable: false,
        speed: 0.9,
        sync: true,
      },
    },
    size: {
      value: 10,
      animation: {
        enable: true,
        speed: 80,
        sync: false,
      },
    },
    links: {
      enable: false,
      distance: 176,
      color: "#ffffff",
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 15,
      direction: "bottom-right",
      random: true,
      straight: false,
      outModes: "out",
      attract: {
        enable: false,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
    },
  },
  interactivity: {
    detectOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: {
        enable: true,
      },
    },
    modes: {
      grab: {
        distance: 400,
        links: {
          opacity: 0.5,
        },
      },
      bubble: {
        distance: 400,
        size: 4,
        duration: 0.3,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        quantity: 4, // ✅ `particles_nb` → `quantity`
      },
      remove: {
        quantity: 2, // ✅ `particles_nb` → `quantity`
      },
    },
  },
  detectRetina: true,
};


  async ngOnInit(): Promise<void> {
    await this.initializeParticles();
  }


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

async initializeParticles(): Promise<void> {
    await loadSlim(tsParticles); // Load the slim version of tsparticles

    // Correct way to load particles
    await tsParticles.load({
        id: "tsparticles",
        options: this.particlesOptions // Use the correct structure
    });

    console.log("Particles initialized!");
}

}

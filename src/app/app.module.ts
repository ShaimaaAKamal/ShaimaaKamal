import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxParticlesModule } from '@tsparticles/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/sharedComponents/footer/footer.component';
import { NavbarComponent } from './Components/sharedComponents/navbar/navbar.component';
import { HomeComponent } from './Components/mainComponents/home/home.component';
import { ResumeComponent } from './Components/mainComponents/resume/resume.component';
import { PortfolioComponent } from './Components/mainComponents/portfolio/portfolio.component';
import { ContactMeComponent } from './Components/mainComponents/contact-me/contact-me.component';
import { ServicesComponent } from './Components/mainComponents/services/services.component';
import { BlogsComponent } from './Components/mainComponents/blogs/blogs.component';
import { TestimonialsComponent } from './Components/mainComponents/testimonials/testimonials.component';
import { MovingCircleComponent } from './Components/mainComponents/moving-circle/moving-circle.component';
import { AboutComponent } from './Components/mainComponents/about/about.component';
import { SkillsComponent } from './Components/mainComponents/skills/skills.component';
import { SocialLinksComponent } from './Components/sharedComponents/social-links/social-links.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactMeComponent,
    ServicesComponent,
    BlogsComponent,
    TestimonialsComponent,
    MovingCircleComponent,
    AboutComponent,
    SkillsComponent,
    SocialLinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxParticlesModule  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

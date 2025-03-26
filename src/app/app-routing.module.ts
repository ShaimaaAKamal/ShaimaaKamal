import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/mainComponents/home/home.component';
import { AboutComponent } from './Components/mainComponents/about/about.component';
import { ContactMeComponent } from './Components/mainComponents/contact-me/contact-me.component';
import { PortfolioComponent } from './Components/mainComponents/portfolio/portfolio.component';
import { SkillsComponent } from './Components/mainComponents/skills/skills.component';

const routes: Routes = [
  {path:"",component:HomeComponent,pathMatch:"full"},
  {path:"About",component:AboutComponent},
  {path:"Skills",component:SkillsComponent},
  {path:"Projects",component:PortfolioComponent},
  {path:"Contact",component:ContactMeComponent},
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

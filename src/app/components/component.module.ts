import { AccordionComponent } from "./accordion/accordion.component";
import { AlertInfoComponent } from './alert-info/alert-info.component';
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from "./home/home.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { NgModule } from "@angular/core";
import { TitreApplicatifComponent } from "./titre-applicatif/titre-applicatif.component";
import { TitrePageComponent } from "./titre-page/titre-page.component";

@NgModule({
  imports: [BrowserModule, CommonModule, FontAwesomeModule],
  declarations: [
    HomeComponent,
    NavBarComponent,
    AccordionComponent,
    TitreApplicatifComponent,
    TitrePageComponent,
    FooterComponent,
    AlertInfoComponent
  ],
  exports: [
    HomeComponent,
    NavBarComponent,
    AccordionComponent,
    TitreApplicatifComponent,
    TitrePageComponent,
    FooterComponent,
    AlertInfoComponent
  ]
})
export class ComponentModule {}

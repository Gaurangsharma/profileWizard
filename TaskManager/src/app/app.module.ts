import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import {MatStepperModule} from '@angular/material/stepper';
import { FormWizardModule } from 'angular-wizard-form';
import { WizardComponent } from 'angular-wizard-form';


import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { SkillDetailsComponent } from './skill-details/skill-details.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { WorkFinishedComponent } from './work-finished/work-finished.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    PersonalDetailsComponent,
    ContactDetailsComponent,
    SkillDetailsComponent,
    WorkExperienceComponent,
    WorkFinishedComponent,
    FormWizardModule,
    WizardComponent
  ],
  imports: [
    BrowserModule,
    FormWizardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

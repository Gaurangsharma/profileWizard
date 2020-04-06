import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from '../app/app-routing/app-routing.module';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatGridListModule } from "@angular/material/grid-list";
import {  MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { SkillDetailsComponent } from './skill-details/skill-details.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { WorkFinishedComponent } from './work-finished/work-finished.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatIconModule, MatButtonModule , MatSidenavModule, MatToolbarModule
} from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';
import { MatCardModule } from "@angular/material/card";

import { PutformService } from "../app/services/putform.service";

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatGridListModule,
    MatFormFieldModule,
    MatStepperModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatChipsModule,
    MatCardModule,
    ],
  providers: [
    PutformService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

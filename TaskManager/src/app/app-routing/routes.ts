import { Routes } from "@angular/router";
import { DashboardComponent } from "../dashboard/dashboard.component";

import { WorkFinishedComponent } from "../work-finished/work-finished.component";

import { ContactDetailsComponent } from "../contact-details/contact-details.component";

export const routes:Routes =[
    { path:'dashboard', component:DashboardComponent},
    { path:'formView', component:WorkFinishedComponent},
    { path:'formDetail', component:ContactDetailsComponent},
    { path:'', redirectTo:'formDetail',pathMatch:'full'}
];
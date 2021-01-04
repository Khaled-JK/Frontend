import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BookingComponent } from './booking/booking.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { MainComponent } from './main/main.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
  {path:"", component:LandingComponent}, 
  {path:"Home", component:HeaderComponent}, 
  {path:"AboutUs", component:AboutusComponent}, 
  {path:"ContactUs", component:ContactusComponent}, 
  {path:"Register", component:RegisterFormComponent}, 
  {path:"Booking", component:BookingComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

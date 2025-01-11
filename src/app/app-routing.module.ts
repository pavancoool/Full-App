import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculaterComponent } from './calculater/calculater.component';
import { BmiComponent } from './bmi/bmi.component';
import { DataBindiingComponent } from './data-bindiing/data-bindiing.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { DirectivesComponent } from './directives/directives.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { MyntraComponent } from './myntra/myntra.component';
import { MailComponent } from './mail/mail.component';
import { PrinterestComponent } from './printerest/printerest.component';
import { WeatherComponent } from './weather/weather.component';
import { BlogComponent } from './blog/blog.component';
import { ImdbComponent } from './imdb/imdb.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { StudentsidcardComponent } from './studentsidcard/studentsidcard.component';
import { CreateStudentComponent } from './create-student/create-student.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'flipkart',component:DashboardComponent},
  {path:'dashboard',component:DashComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'calculater',component:CalculaterComponent},
    {path:'bmi',component:BmiComponent},
    {path:'data-binding',component:DataBindiingComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'myntra',component:MyntraComponent},
    {path:'mail',component:MailComponent},
    {path:'printerest',component:PrinterestComponent},
    {path:'weather',component:WeatherComponent},
    {path:'blog',component:BlogComponent},
    {path:'imdb',component:ImdbComponent},
    {path:'userprofile',component:UserprofileComponent},
    {path:'account',component:AccountsComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'student',component:StudentsidcardComponent},
    {path:'create-student',component:CreateStudentComponent},
  
  ]},
  /* {path:'**',component:ErrorComponent} */
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

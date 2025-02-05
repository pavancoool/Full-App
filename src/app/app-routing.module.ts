import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
import { UserComponent } from './user/user.component';
import { User2Component } from './user2/user2.component';
import { AuthenticationGuard } from './authentication.guard';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { AboutCeoComponent } from './about-us/about-ceo/about-ceo.component';
import { AboutCompanyComponent } from './about-us/about-company/about-company.component';
import { TextareaComponent } from './textarea/textarea.component';
import { ToDoComponent } from './to-do/to-do.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'flipkart',component:DashboardComponent},
  {path:'dashboard',canActivate:[AuthenticationGuard],component:DashComponent,children:[
    {path:'home',canActivate:[AuthenticationGuard],component:HomeComponent},
    {path:'welcome',canActivate:[AuthenticationGuard],component:WelcomeComponent},
    {path:'calculater',canActivate:[AuthenticationGuard],component:CalculaterComponent},
    {path:'bmi',canActivate:[AuthenticationGuard],component:BmiComponent},
    {path:'data-binding',canActivate:[AuthenticationGuard],component:DataBindiingComponent},
    {path:'rectangle',canActivate:[AuthenticationGuard],component:RectangleComponent},
    {path:'circle',canActivate:[AuthenticationGuard],component:CircleComponent},
    {path:'directives',canActivate:[AuthenticationGuard],component:DirectivesComponent},
    {path:'employee',canActivate:[AuthenticationGuard],component:EmployeeComponent},
    {path:'vehicle',canActivate:[AuthenticationGuard],component:VehicleComponent},
    {path:'myntra',canActivate:[AuthenticationGuard],component:MyntraComponent},
    {path:'mail',canActivate:[AuthenticationGuard],component:MailComponent},
    {path:'printerest',canActivate:[AuthenticationGuard],component:PrinterestComponent},
    {path:'weather',canActivate:[AuthenticationGuard],component:WeatherComponent},
    {path:'blog',canActivate:[AuthenticationGuard],component:BlogComponent},
    {path:'imdb',canActivate:[AuthenticationGuard],component:ImdbComponent},
    {path:'userprofile',canActivate:[AuthenticationGuard],component:UserprofileComponent},
    {path:'account',canActivate:[AuthenticationGuard],component:AccountsComponent},
    {path:'create-vehicle',canActivate:[AuthenticationGuard],component:CreateVehicleComponent},
    {path:'student',canActivate:[AuthenticationGuard],component:StudentsidcardComponent},
    {path:'create-student',canActivate:[AuthenticationGuard],component:CreateStudentComponent},
    {path:'user',canActivate:[AuthenticationGuard],component:UserComponent},
    {path:'user2',canActivate:[AuthenticationGuard],component:User2Component},
    {path:'vehicle-details/:id',canActivate:[AuthenticationGuard],component:VehicleDetailsComponent},
    {path:'edit-vehicle/:id',canActivate:[AuthenticationGuard],component:CreateVehicleComponent},
    {path:'student-details/:id',canActivate:[AuthenticationGuard],component:StudentDetailsComponent},
    {path:'edit-student/:id',canActivate:[AuthenticationGuard],component:CreateStudentComponent},
    {path:'sibling1',component:Sibling1Component},
    {path:'sibling2',component:Sibling2Component},
    {path:'parent',component:ParentComponent},
    {path:'child',component:ChildComponent},
    {path:'rating',component:RatingComponent},
    {path:'about-ceo',component:AboutCeoComponent},
    {path:'about-company',component:AboutCompanyComponent},
    {path:'text-area',component:TextareaComponent},
    {path:'todo',component:ToDoComponent},
    {
      path: 'payment',
    loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule)
    }
  ]},
  /* {path:'**',component:ErrorComponent} */

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],//preloadingstrstegy will used to load all modules and lazy modules befor we access it
  exports: [RouterModule]
})
export class AppRoutingModule { }

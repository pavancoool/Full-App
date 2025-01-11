import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculaterComponent } from './calculater/calculater.component';
import { BmiComponent } from './bmi/bmi.component';
import { DataBindiingComponent } from './data-bindiing/data-bindiing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { DirectivesComponent } from './directives/directives.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    HomeComponent,
    WelcomeComponent,
    CalculaterComponent,
    BmiComponent,
    DataBindiingComponent,
    RectangleComponent,
    CircleComponent,
    DirectivesComponent,
    LoginComponent,
    EmployeeComponent,
    DashboardComponent,
    VehicleComponent,
    MyntraComponent,
    MailComponent,
    PrinterestComponent,
    WeatherComponent,
    BlogComponent,
    ImdbComponent,
    UserprofileComponent,
    AccountsComponent,
    CreateVehicleComponent,
    StudentsidcardComponent,
    CreateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

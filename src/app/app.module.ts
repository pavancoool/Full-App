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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { CapitalDirective } from './capital.directive';
import { BalancePipe } from './balance.pipe';
import { TokenInterceptor } from './token.interceptor';
import { AboutUsModule } from './about-us/about-us.module';
import { TextareaComponent } from './textarea/textarea.component';
import { ToDoComponent } from './to-do/to-do.component';

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
    CreateStudentComponent,
    UserComponent,
    User2Component,
    VehicleDetailsComponent,
    StudentDetailsComponent,
    Sibling1Component,
    Sibling2Component,
    ParentComponent,
    ChildComponent,
    RatingComponent,
    CapitalDirective,
    BalancePipe,
    TextareaComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

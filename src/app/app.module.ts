import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { StaffComponent } from './staff/staff.component';
import { AdminComponent } from './admin/admin.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { CustomernavComponent } from './customernav/customernav.component';
import { NavComponent } from './nav/nav.component';
import { ServicesComponent } from './services/services.component';
import { MenuComponent } from './menu/menu.component';
import { CheckReservationsComponent } from './check-reservations/check-reservations.component';
import { StaffnavComponent } from './staffnav/staffnav.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search/search.service';
import { SubmitQueryComponent } from './submit-query/submit-query.component';
import { CustomerComponent } from './customer/customer.component';
import { QueryService } from './submit-query/query.service';
import { CheckratesComponent } from './checkrates/checkrates.component';
import { OffersComponent } from './offers/offers.component';
import { ContactUsComponent } from './contactus/contactus.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { GenerateReportsComponent } from './generate-reports/generate-reports.component';
import { ViewQueryComponent } from './viewquery/viewquery.component'; 
import { Reservation1Service } from './view-reservations/reservation1.service';
import { ViewReservationsComponent } from './view-reservations/view-reservations.component';
import { ResponqueryComponent } from './responquery/responquery.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentService } from './payment/payment.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    LandingComponent,
    HeaderComponent,
    StaffComponent,
    AdminComponent,
    ReservationComponent,
    AdminnavComponent,
    CustomernavComponent,
    ContactUsComponent,
    NavComponent,
    SubmitQueryComponent,
    CustomerComponent,
    MenuComponent,
    ServicesComponent,
    ViewReservationsComponent,
    OffersComponent,
    CheckReservationsComponent,
    StaffnavComponent, 
    CheckratesComponent,
    ResponqueryComponent,
    GenerateReportsComponent,
    ViewQueryComponent, 
    PaymentComponent,
    SearchComponent,
    ManageusersComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    QueryService,
    PaymentService,
    Reservation1Service, 
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

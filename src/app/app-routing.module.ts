import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { StaffComponent } from './staff/staff.component';
import { CustomerComponent } from './customer/customer.component';
import { RoleGuard } from './role.guard';
import { ReservationComponent } from './reservation/reservation.component';
import { SubmitQueryComponent } from './submit-query/submit-query.component';
import { CheckReservationsComponent } from './check-reservations/check-reservations.component';
import { MenuComponent } from './menu/menu.component';
import { ServicesComponent } from './services/services.component';
import { SearchComponent } from './search/search.component';
import { CheckratesComponent } from './checkrates/checkrates.component';
import { OffersComponent } from './offers/offers.component';
import { ContactUsComponent } from './contactus/contactus.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { GenerateReportsComponent } from './generate-reports/generate-reports.component';
import { ViewQueryComponent } from './viewquery/viewquery.component'; 
import { ViewReservationsComponent } from './view-reservations/view-reservations.component';
import { ResponqueryComponent } from './responquery/responquery.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'manageuser', component: ManageusersComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'viewquery', component: ViewQueryComponent }, // Use ViewQueryComponent
  { path: 'generatereport', component: GenerateReportsComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'submit-query', component: SubmitQueryComponent },
  { path: 'respond', component: ResponqueryComponent },
  { path: 'viewreservation', component: ViewReservationsComponent },
  { path: 'check-reservation', component: CheckReservationsComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'checkrates', component: CheckratesComponent },
  { path: 'admin', component: AdminComponent, canActivate: [RoleGuard] },
  { path: 'staff', component: StaffComponent, canActivate: [RoleGuard] },
  { path: 'customer', component: CustomerComponent, canActivate: [RoleGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

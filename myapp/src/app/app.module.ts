import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {  NavbarComponent } from './navbar/navbar.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AuthguardGuard } from './authguard.guard';
import { UserService } from './user.service';
import { BookticketsComponent } from './booktickets/booktickets.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegisterComponent } from './register/register.component';
import { PaymentComponent } from './payment/payment.component';
import { AddmoviesComponent } from './addmovies/addmovies.component';
import { HttpClientModule} from '@angular/common/http';
import { RegistrationService } from './services/registration.service';
import { MoviesComponent } from './movies/movies.component';

import {MatCardModule} from '@angular/material/card';




const appRoutes:Routes = [
  {
    path: '',
    component: HomeComponent
  
  },
 
{
  path:'aboutus',
  component:AboutusComponent
},

{
  path:'addmovies',
  component:AddmoviesComponent
},

{
  path:'movies',
  component:MoviesComponent
},
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path:'booktickets',
    component:BookticketsComponent
  },
  {
    path:'payment',
    component:PaymentComponent
  },
  {

    path:'login',
    component:LoginComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    BookticketsComponent,
    NavbarComponent,
    AboutusComponent,
    RegisterComponent,
    PaymentComponent,
    AddmoviesComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatCardModule
  ],
  providers: [UserService, AuthguardGuard,RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

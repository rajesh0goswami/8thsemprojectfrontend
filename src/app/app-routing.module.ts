import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path:"",
    component:IndexComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"movie",
    component:MovieComponent
  },
  {
    path:"booking",
    component:BookingComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"about",
    component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

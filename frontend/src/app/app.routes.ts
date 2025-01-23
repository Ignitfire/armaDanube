import { Routes } from '@angular/router';
import { HomeComponent} from './core/feature/home/home.component';
import { AboutComponent } from './core/feature/about/about.component';
import { ContactComponent } from './core/feature/contact/contact.component';
import { RegisterComponent } from './core/feature/register/register.component';
import {PageCreationComponent} from './core/feature/page-creation/page-creation.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'createPage', component: PageCreationComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

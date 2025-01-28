import { Routes } from '@angular/router';
import { HomeComponent} from './core/feature/home/home.component';
import { AboutComponent } from './core/feature/about/about.component';
import { ContactComponent } from './core/feature/contact/contact.component';
import { RegisterComponent } from './logistics/feature/register/register.component';
import { PageCreationComponent} from './pages/feature/page-creation/page-creation.component';
import { PageComponent} from './pages/feature/page/page.component';
import {InventoryComponent} from './logistics/feature/inventory/inventory.component';
import {PlanningComponent} from './logistics/feature/planning/planning.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'inventory', component: InventoryComponent},
  { path: 'planning', component: PlanningComponent},
  { path: 'createPage', component: PageCreationComponent},
  { path: 'page/:name', component: PageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

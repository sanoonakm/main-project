import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'menu', component: MenuComponent},
  { path: 'contact', component: ContactComponent },
];


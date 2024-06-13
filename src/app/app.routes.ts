import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ServiceComponent } from './pages/service/service.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'menu', component: MenuComponent},
  { path: 'service', component: ServiceComponent },
  { path: 'contact', component: ContactComponent },
];

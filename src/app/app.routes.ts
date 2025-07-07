import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
];

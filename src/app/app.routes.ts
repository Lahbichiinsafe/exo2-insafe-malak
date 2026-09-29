import { Routes } from '@angular/router';
import { Accueil } from './accueil/accueil';
import { Liste } from './liste/liste';
import { Contact } from './contact/contact';
import { Gestion } from './gestion/gestion';

export const routes: Routes = [
  { path: 'accueil', component: Accueil },
  { path: 'liste', component: Liste },
  { path: 'contact', component: Contact },
  { path: 'gestion', component: Gestion },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', redirectTo: 'accueil' }
];
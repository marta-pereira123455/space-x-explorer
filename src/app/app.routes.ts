import { Routes } from '@angular/router';

import { LaunchesListComponent } from './components/launches-list/launches-list.component';
import { LaunchDetailsComponent } from './components/launch-details/launch-details.component';

export const routes: Routes = [
  { path: '', component: LaunchesListComponent, pathMatch: 'full' },
  { path: 'launch/:flightNumber', component: LaunchDetailsComponent, pathMatch: 'full' },
];

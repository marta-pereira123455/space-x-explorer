import { Routes } from '@angular/router';

import { LaunchesListComponent } from './components/launches-list/launches-list.component';

export const routes: Routes = [
  { path: '', component: LaunchesListComponent, pathMatch: 'full' },
];

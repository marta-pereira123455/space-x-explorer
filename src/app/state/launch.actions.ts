import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { Launch } from '../models/launch.model';

export const loadLaunches = createAction('[Launch List] Load Launches');
export const loadLaunchesSuccess = createAction(
  '[Launch List] Load Success',
  props<{ launches: Launch[] }>(),
);
export const loadLaunchesFailure = createAction(
  '[Launch List] Load Failure',
  props<{ error: HttpErrorResponse }>(),
);

export const loadLaunch = createAction(
  '[Launch] Load Launch',
  props<{ flightNumber: number }>(),
);
export const loadLaunchSuccess = createAction(
  '[Launch] Load Success',
  props<{ launch: Launch }>(),
);
export const loadLaunchFailure = createAction(
  '[Launch] Load Failure',
  props<{ error: HttpErrorResponse }>(),
);

export const toggleFavorite = createAction(
  '[Launch] Toggle Favorite',
  props<{ flightNumber: number }>(),
);

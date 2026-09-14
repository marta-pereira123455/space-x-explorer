import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { inject, Injectable } from '@angular/core';

import { SpacexService } from '../services/spacex.service';

import { Launch } from '../models/launch.model';

import {
  loadLaunches,
  loadLaunchesFailure,
  loadLaunchesSuccess,
} from './launch.actions';

@Injectable()
export class LaunchEffects {
  private readonly actions$ = inject(Actions);
  private readonly spacexService = inject(SpacexService);

  loadLaunches$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadLaunches),
      switchMap(() =>
        this.spacexService.getPastLaunches().pipe(
          map((launches: Launch[]) => loadLaunchesSuccess({ launches })),
          catchError((error) => of(loadLaunchesFailure({ error }))),
        ),
      ),
    ),
  );
}

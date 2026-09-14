import { combineLatest, map, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Launch } from '../../models/launch.model';

import { loadLaunch, toggleFavorite } from '../../state/launch.actions';
import {
  selectError,
  selectFavoriteLaunches,
  selectIsLoading,
  selectSelectedLaunch,
} from '../../state/launch.selectors';

@Component({
  selector: 'app-launch-details',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule,
  ],
  templateUrl: './launch-details.component.html',
  styleUrl: './launch-details.component.scss',
})
export class LaunchDetailsComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  launchDetailsData$!: Observable<{
    launch: Launch | null;
    error: HttpErrorResponse | null;
    isFavorite: boolean;
    loading: boolean;
  }>;

  ngOnInit() {
    const flightNumber = Number(
      this.route.snapshot.paramMap.get('flightNumber'),
    );

    this.store.dispatch(loadLaunch({ flightNumber }));

    this.launchDetailsData$ = combineLatest([
      this.store.select(selectSelectedLaunch),
      this.store.select(selectError),
      this.store.select(selectFavoriteLaunches),
      this.store.select(selectIsLoading),
    ]).pipe(
      map(([launch, error, favoriteIds, loading]) => ({
        launch,
        error,
        isFavorite: launch ? favoriteIds.includes(launch.flight_number) : false,
        loading,
      })),
    );
  }

  navigateToLaunchesList() {
    this.router.navigateByUrl('');
  }

  toggleFavorite(flightNumber: number) {
    this.store.dispatch(toggleFavorite({ flightNumber }));
  }
}

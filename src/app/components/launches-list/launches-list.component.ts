import { combineLatest, map, Observable } from 'rxjs';
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

import { loadLaunches, toggleFavorite } from '../../state/launch.actions';
import {
  selectAllLaunches,
  selectError,
  selectFavoriteLaunches,
  selectIsLoading,
} from '../../state/launch.selectors';

@Component({
  selector: 'app-launches-list',
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
  templateUrl: './launches-list.component.html',
  styleUrl: './launches-list.component.scss',
})
export class LaunchesListComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly store = inject(Store);

  filteredLaunches: Launch[] = [];
  launchesListData$!: Observable<{
    allLaunches: Launch[];
    error: HttpErrorResponse | null;
    favoriteIds: number[];
    loading: boolean;
  }>;
  searchTerm = '';

  ngOnInit() {
    this.store.dispatch(loadLaunches());

    this.launchesListData$ = combineLatest([
      this.store.select(selectAllLaunches),
      this.store.select(selectError),
      this.store.select(selectFavoriteLaunches),
      this.store.select(selectIsLoading),
    ]).pipe(
      map(([allLaunches, error, favoriteIds, loading]) => {
        if (!this.searchTerm) this.filteredLaunches = allLaunches;

        return { allLaunches, error, favoriteIds, loading };
      }),
    );
  }

  isFavorite(favoriteIds: number[], flightNumber: number): boolean {
    return favoriteIds.includes(flightNumber);
  }

  navigateToLaunch(flightNumber: number) {
    this.router.navigateByUrl(`launch/${flightNumber}`);
  }

  onSearchChange(allLaunches: Launch[]) {
    this.filteredLaunches = allLaunches.filter((launch: Launch) =>
      launch.mission_name.toLowerCase().includes(this.searchTerm.toLowerCase()),
    );
  }

  toggleFavorite(flightNumber: number) {
    this.store.dispatch(toggleFavorite({ flightNumber }));
  }
}

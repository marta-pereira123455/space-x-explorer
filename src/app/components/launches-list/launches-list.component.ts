import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';

import { Launch } from '../../models/launch.model';

import { loadLaunches } from '../../state/launch.actions';
import {
  selectAllLaunches,
  selectError,
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
  private readonly store = inject(Store);

  allLaunches$!: Observable<Launch[]>;
  error$!: Observable<HttpErrorResponse | null>;
  loading$!: Observable<boolean>;
  filteredLaunches: Launch[] = [];
  searchTerm = '';

  ngOnInit() {
    this.store.dispatch(loadLaunches());
    this.allLaunches$ = this.store.select(selectAllLaunches).pipe(
      map((allLaunches) => {
        this.filteredLaunches = allLaunches;

        return allLaunches;
      }),
    );
    this.error$ = this.store.select(selectError);
    this.loading$ = this.store.select(selectIsLoading);
  }

  onSearchChange(allLaunches: Launch[]) {
    this.filteredLaunches = allLaunches.filter((launch: Launch) =>
      launch.mission_name.toLowerCase().includes(this.searchTerm.toLowerCase()),
    );
  }
}

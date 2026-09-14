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
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Launch } from '../../models/launch.model';

import { loadLaunch } from '../../state/launch.actions';
import {
  selectError,
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

  error$!: Observable<HttpErrorResponse | null>;
  launch$!: Observable<Launch | null>;
  loading$!: Observable<boolean>;

  ngOnInit() {
    const flightNumber = Number(
      this.route.snapshot.paramMap.get('flightNumber'),
    );

    this.store.dispatch(loadLaunch({ flightNumber }));
    this.error$ = this.store.select(selectError);
    this.launch$ = this.store.select(selectSelectedLaunch);
    this.loading$ = this.store.select(selectIsLoading);
  }

  navigateToLaunchesList() {
    this.router.navigateByUrl('');
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Subscription } from 'rxjs';

import { SpacexService } from '../../services/spacex.service';

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
  private spacexService = inject(SpacexService);

  private sub!: Subscription;

  allLaunches: any[] = [];
  filteredLaunches: any[] = [];
  searchTerm = '';

  ngOnInit() {
    this.loadLaunches();
  }

  private loadLaunches() {
    this.sub = this.spacexService.getPastLaunches().subscribe((data: any) => {
      this.allLaunches = data;
      this.filteredLaunches = data;
    });
  }

  onSearchChange() {
    this.filteredLaunches = this.allLaunches.filter((launch) =>
      launch.name.includes(this.searchTerm),
    );
  }
}

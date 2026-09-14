import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { Launch } from '../models/launch.model';

@Injectable({
  providedIn: 'root',
})
export class SpacexService {
  private readonly http = inject(HttpClient);

  private readonly localUrl = 'launches.json';

  getPastLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.localUrl);
  }

  getLaunchByFlightNumber(flightNumber: number): Observable<Launch> {
    return this.http.get<Launch[]>(this.localUrl).pipe(
      map((launches) => {
        const launch = launches.find(
          (launch) => launch.flight_number === flightNumber,
        );

        if (!launch) {
          throw new Error('Launch not found');
        }

        return launch;
      }),
    );
  }
}

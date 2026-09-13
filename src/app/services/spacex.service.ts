import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}

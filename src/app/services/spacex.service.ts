import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpacexService {
  private readonly http = inject(HttpClient);

  private readonly localUrl = 'launches.json';

  getPastLaunches(): Observable<any[]> {
    return this.http.get<any[]>(this.localUrl);
  }

  getLaunchById(id: string): Observable<any> {
    return this.http
      .get<any[]>(this.localUrl)
      .pipe(map((launches) => launches.find((l) => l.id === id)));
  }
}

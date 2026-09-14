import { HttpErrorResponse } from "@angular/common/http";

import { Launch } from "./launch.model";

export interface LaunchState {
  error: HttpErrorResponse | null;
  favoriteLaunches: number[];
  launches: Launch[];
  loading: boolean;
  selectedLaunch: Launch | null;
}

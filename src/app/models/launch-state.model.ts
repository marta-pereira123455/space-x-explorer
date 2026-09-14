import { HttpErrorResponse } from "@angular/common/http";

import { Launch } from "./launch.model";

export interface LaunchState {
  error: HttpErrorResponse | null;
  favoriteIds: string[];
  launches: Launch[];
  loading: boolean;
  selectedLaunch: Launch | null;
}

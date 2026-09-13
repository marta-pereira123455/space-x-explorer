import { HttpErrorResponse } from "@angular/common/http";

import { Launch } from "./launch.model";

export interface LaunchState {
  launches: Launch[];
  favoriteIds: string[];
  loading: boolean;
  error: HttpErrorResponse | null;
}

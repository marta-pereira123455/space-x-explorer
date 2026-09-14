import { createFeatureSelector, createSelector } from '@ngrx/store';

import { LaunchState } from '../models/launch-state.model';

export const selectLaunchState = createFeatureSelector<LaunchState>('launch');

export const selectAllLaunches = createSelector(
  selectLaunchState,
  (state) => state.launches,
);
export const selectIsLoading = createSelector(
  selectLaunchState,
  (state) => state.loading,
);
export const selectFavoriteIds = createSelector(
  selectLaunchState,
  (state) => state.favoriteIds,
);
export const selectError = createSelector(
  selectLaunchState,
  (state) => state.error,
);
export const selectSelectedLaunch = createSelector(
  selectLaunchState,
  (state) => state.selectedLaunch,
);
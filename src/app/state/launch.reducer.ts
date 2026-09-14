import { createReducer, on } from '@ngrx/store';

import { LaunchState } from '../models/launch-state.model';

import * as LaunchActions from './launch.actions';

export const initialState: LaunchState = {
  error: null,
  favoriteIds: [],
  launches: [],
  loading: false,
  selectedLaunch: null,
};

export const launchReducer = createReducer(
  initialState,
  on(LaunchActions.loadLaunches, (state) => ({ ...state, loading: true })),
  on(LaunchActions.loadLaunchesSuccess, (state, { launches }) => ({
    ...state,
    loading: false,
    launches,
  })),
  on(LaunchActions.loadLaunchesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(LaunchActions.loadLaunch, (state) => ({ ...state, loading: true })),
  on(LaunchActions.loadLaunchSuccess, (state, { launch }) => ({
    ...state,
    loading: false,
    selectedLaunch: launch,
  })),
  on(LaunchActions.loadLaunchFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
);

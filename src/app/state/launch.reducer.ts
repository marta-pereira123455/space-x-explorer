import { createReducer, on } from '@ngrx/store';

import { LaunchState } from '../models/launch-state.model';

import * as LaunchActions from './launch.actions';

export const initialState: LaunchState = {
  error: null,
  favoriteLaunches: [],
  launches: [],
  loading: false,
  selectedLaunch: null,
};

export const launchReducer = createReducer(
  initialState,
  on(LaunchActions.loadLaunches, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(LaunchActions.loadLaunchesSuccess, (state, { launches }) => ({
    ...state,
    loading: false,
    error: null,
    launches,
  })),
  on(LaunchActions.loadLaunchesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(LaunchActions.loadLaunch, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(LaunchActions.loadLaunchSuccess, (state, { launch }) => ({
    ...state,
    loading: false,
    error: null,
    selectedLaunch: launch,
  })),
  on(LaunchActions.loadLaunchFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(LaunchActions.toggleFavorite, (state, { flightNumber }) => {
    const isFavorite = state.favoriteLaunches.includes(flightNumber);

    return {
      ...state,
      favoriteLaunches: isFavorite
        ? state.favoriteLaunches.filter((id) => id !== flightNumber)
        : [...state.favoriteLaunches, flightNumber],
    };
  }),
);

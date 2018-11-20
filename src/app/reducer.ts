import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';


export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {};

export const reducerToken = new InjectionToken<ActionReducerMap<any>>('Reducers');

export function getReducers() {
  return reducers;
}

export const reducerProvider = [{ provide: reducerToken, useFactory: getReducers }];

export function logger(reducer: ActionReducer<AppState>): any {
  return (state: AppState, action: any) => {
    if (state) {
      console.log('state', JSON.parse(JSON.stringify(state)));
    }

    return reducer(state, action);
  };
}

export const selectAppState = (state: AppState) => state;

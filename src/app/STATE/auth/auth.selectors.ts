import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthStateInterfcace } from "./auth.state";

// gets the entire auth state
const getAuthState = createFeatureSelector<AuthStateInterfcace>('auth');

export const authSelector = createSelector(getAuthState, (state) => state.auth);
import { createReducer, on } from "@ngrx/store";
import { setAuthAction } from "./auth.actions";
import { initialAuthState } from "./auth.state";

export const authReducer = createReducer(
    initialAuthState,
    on(setAuthAction, (state, action) => ({
        ...state,
        auth: action.auth,
    })),
);
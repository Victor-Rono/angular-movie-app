import { authReducer } from "./auth/auth.reducer";
import { AuthStateInterfcace } from "./auth/auth.state";

export interface AppStateInterface {
    auth: AuthStateInterfcace,
}

export const appReducer = {
    auth: authReducer,
}
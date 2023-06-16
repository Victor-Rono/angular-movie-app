import { AuthInterface } from "src/app/shared/interfaces/auth/auth.interface";

export interface AuthStateInterfcace {
    auth: AuthInterface | null,
}

export const initialAuthState: AuthStateInterfcace = {
    auth: null,
}
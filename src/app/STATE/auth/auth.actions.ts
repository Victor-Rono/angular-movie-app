import { createAction, props } from "@ngrx/store";
import { AuthInterface } from "src/app/shared/interfaces/auth/auth.interface";


export const setAuthAction = createAction(
    'update auth',
    props<{ auth: AuthInterface | null }>(),
);
import { createAction, props } from "@ngrx/store";
import { AuthInterface } from "src/app/shared/interfaces/auth/auth.interface";
import { LoginInterface } from "src/app/shared/interfaces/auth/login.interface";


export const setAuthAction = createAction(
    'update auth',
    props<{ auth:LoginInterface| AuthInterface  | null }>(),
);
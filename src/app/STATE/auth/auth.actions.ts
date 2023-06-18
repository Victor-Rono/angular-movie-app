import { createAction, props } from "@ngrx/store";
import { AuthInterface } from "src/app/shared/interfaces/auth.interface";
import { LoginInterface } from "src/app/shared/interfaces/login.interface";


export const setAuthAction = createAction(
    'update auth',
    props<{ auth:LoginInterface| AuthInterface  | null }>(),
);

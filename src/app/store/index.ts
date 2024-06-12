import { ActionReducerMap } from "@ngrx/store";
import { authFixtureName, authReducer } from "./auth/auth.reducer";

interface RootState {}

export const rootReducer: ActionReducerMap<RootState> = {
    [authFixtureName] : authReducer
};
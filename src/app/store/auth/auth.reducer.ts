import { createReducer, on } from '@ngrx/store';
import { IUser } from '../../layouts/dashboard/pages/users/models/user.model';
import { authActions } from './auth.actions';

export interface AuthState {
  //si user no hace login, authUser es detipo null
  authUser: null | IUser;
  error: any;
}

const initialState: AuthState = {
  authUser: null,
  error: null,
};

export const authFixtureName = 'auth';

export const authReducer = createReducer(
  initialState,
  on(authActions.login, (state) => ({
    ...state,
    authUser: null,
    error: null,
  })),
  on(authActions.loginSuccess, (state, { user }) => ({
    ...state,
    authUser: user,
    error: null,
  })),
  on(authActions.loginFail, (state, { error }) => ({
    ...state,
    authUser: null,
    error,
  }))
);

import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { LoginRequest } from "../../layouts/auth/models/loginRequest.model";
import { IUser } from "../../layouts/dashboard/pages/users/models/user.model";

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
   login: props<{loginData: LoginRequest }>(),
   loginSuccess: props<{user: IUser}>(),
   loginFail: props<{error: any}>()
  },
})
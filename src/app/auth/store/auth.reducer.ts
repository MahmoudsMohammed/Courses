import { createReducer, on } from "@ngrx/store";
import { initialAuthState } from "./auth.state";
import * as authActions from "./auth.actions";

export const authReducer = createReducer(
  initialAuthState,
  on(authActions.login, (state, action) => {
    return { ...state, user: action.user };
  }),
  on(authActions.logout, (state, action) => {
    return {
      user: undefined,
    };
  })
);

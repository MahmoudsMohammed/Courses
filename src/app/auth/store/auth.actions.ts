import { User } from "./auth.state";
import { createAction, createReducer, props } from "@ngrx/store";

export const login = createAction(
  "[login page] user login",
  props<{ user: User }>()
);

export const logout = createAction("[sidebar] user logout");

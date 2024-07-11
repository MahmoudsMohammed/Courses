import { User } from "./../model/user.model";
import { createAction, props } from "@ngrx/store";

//
export const login = createAction(
  "[login page] user login",
  props<{ user: User }>()
);

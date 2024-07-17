import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";

// make feature selector to select from store state to provide type safe
const authFeature = createFeatureSelector<AuthState>("auth");

// use feature selector then make projector function
export const Login = createSelector(authFeature, (auth) => !!auth.user);

export const LogOut = createSelector(
  (state) => state["auth"],
  (auth) => !auth.user
);

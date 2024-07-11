import { createReducer } from "@ngrx/store";
import { initialAuthState } from "./auth.state";
import { on } from "events";

export const authReducer = createReducer(initialAuthState);

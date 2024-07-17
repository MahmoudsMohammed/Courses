import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as authActions from "./auth.actions";
import { tap } from "rxjs/operators";

@Injectable()
export class authEffects {
  constructor(private actions$: Actions, private router: Router) {}

  // loginEffect$ = this.actions.subscribe((action) => {
  //   if (action.type === "[login page] user login") {
  //     localStorage.setItem("user", JSON.stringify(action["user"]));
  //   } else if (action.type === "[sidebar] user logout") {
  //     localStorage.removeItem("user");
  //     this.router.navigate(["/"]);
  //   }
  // });

  // effect is observable make task based on the dispatched action
  loginEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.login),
        tap((login) => {
          localStorage.setItem("user", JSON.stringify(login.user));
        })
      ),
    { dispatch: false }
  );

  logOutEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.logout),
        tap((logout) => {
          localStorage.removeItem("user");
          this.router.navigate(["/"]);
        })
      ),
    { dispatch: false }
  );
}

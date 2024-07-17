import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Login } from "../store/auth.selectors";
import { tap } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class authGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.select(Login).pipe(
      tap((login) => {
        if (!login) {
          this.router.navigate(["/"]);
        }
      })
    );
  }
}

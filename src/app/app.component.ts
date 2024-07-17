import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as authActions from "./auth/store/auth.actions";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Login, LogOut } from "./auth/store/auth.selectors";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loading = true;
  isLogin$: Observable<boolean>;
  isLogout$: Observable<boolean>;

  constructor(private router: Router, private store: Store) {}

  ngOnInit() {
    this.isLogin$ = this.store.select(Login);
    this.isLogout$ = this.store.select(LogOut);

    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  logout() {
    this.store.dispatch(authActions.logout());
  }
}

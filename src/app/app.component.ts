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

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loading = true;

  constructor(private router: Router, private store: Store) {}

  ngOnInit() {
    this.store.subscribe((res) => {
      console.log(res);
    });

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

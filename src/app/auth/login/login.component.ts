import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import * as authActions from "../store/auth.actions";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private store: Store
  ) {
    this.form = fb.group({
      email: ["test@angular-university.io", [Validators.required]],
      password: ["test", [Validators.required]],
    });
  }

  ngOnInit() {}

  login() {
    this.auth
      .login(this.form.value["email"], this.form.value["password"])
      .subscribe((res) => {
        // dispatch action and send data at the payload
        this.store.dispatch(
          authActions.login({
            user: {
              email: res.email,
              id: res.id,
            },
          })
        );
        this.router.navigate(["courses"]);
      });
  }
}

import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { StoreModule } from "@ngrx/store";
import { AuthService } from "./services/auth.service";
import { authReducer } from "./store/auth.reducer";
import { EffectsModule } from "@ngrx/effects";
import { authEffects } from "./store/auth.effects";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild([{ path: "", component: LoginComponent }]),
    StoreModule.forFeature("auth", authReducer),
    EffectsModule.forFeature(authEffects),
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [AuthService],
    };
  }
}

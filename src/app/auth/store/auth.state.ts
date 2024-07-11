// declare the state and sub states interface for the feature state + initial state value
export interface AuthState {
  user: User;
}

export interface User {
  id: string;
  email: string;
}

export const initialAuthState: AuthState = {
  user: { id: "", email: "" },
};

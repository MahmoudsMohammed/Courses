// declare the state and sub states interface for the feature state + initial state value
// state may be defined in multiple sub states each action update sub state or the whole state
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

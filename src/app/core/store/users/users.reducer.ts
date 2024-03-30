import { Action, State, createReducer, on } from "@ngrx/store";
import { UserResponse } from "../../interfaces";
import { loadUsers, loadUsersError, loadUsersSuccess } from "./users.actions";

export interface UsersState {
  users: UserResponse[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const initialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

const _usersReducer = createReducer(
  initialState,
  on(loadUsers, state => ({ ...state, loading: true })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...users],
  })),
  on(loadUsersError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload,
  }))
);

export function usersReducer(state: any, action: any) {
  return _usersReducer(state, action);
}

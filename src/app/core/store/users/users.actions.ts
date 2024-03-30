import { createAction, props } from '@ngrx/store';
import { UserResponse } from '../../interfaces';

export const loadUsers = createAction('[Users] Load Users');
export const loadUsersSuccess = createAction(
  '[Users] Load Users Success',
  props<{ users: UserResponse[] }>()
);
export const loadUsersError = createAction(
  '[Users] Load Users Error',
  props<{ payload: any }>()
);

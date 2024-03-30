import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usersActions from './users.actions';
import { catchError, exhaustMap, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { UserService } from '../../../modules/dashboard/services/user.service';

@Injectable()
export class UsersEffects {
  private actions$ = inject(Actions);
  private usersService = inject(UserService);

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.loadUsers),
      exhaustMap(() =>
        this.usersService.getUsers().pipe(
          map((users) => usersActions.loadUsersSuccess({ users })),
          catchError((error) => of(usersActions.loadUsersError({ payload: error })))
        )
      )
    )
  );
}

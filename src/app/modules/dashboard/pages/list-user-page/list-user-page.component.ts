import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/store/app.reducers';
import { loadUsers } from '../../../../core/store/users/users.actions';
import { UserResponse } from '../../../../core/interfaces';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './list-user-page.component.html',
  styleUrl: './list-user-page.component.css',
})
export class ListUserPageComponent implements OnInit, OnDestroy {
  public users: UserResponse[] = [];
  public loading: boolean = false;
  public error: any;

  private store: Store<AppState> = inject(Store);
  private subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscription = this.store.select('users').subscribe(({ users, loading, error }) => {
      this.users = users;
      this.loading = loading;
      this.error = error;
    });
    this.store.dispatch(loadUsers());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

import { Injectable, computed, inject, signal } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { LoginResponse, User } from '../../../core/interfaces';
import { AuthStatus } from '../../../core/enums';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);

  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  // public currentUser = computed(this._currentUser);
  public currentUser = computed(() => this._currentUser());
  // public authStatus = computed(this._authStatus);
  public authStatus = computed(() => this._authStatus());

  constructor() {}

  login(email: string, password: string): Observable<boolean> {
    const url = `${this.baseUrl}/api/auth/login`;
    const body = { email, password };

    return this.http.post<LoginResponse>(url, body).pipe(
      tap((response) => {
        this._currentUser.set(response.user);
        this._authStatus.set(AuthStatus.authenticated);
        localStorage.setItem('token', response.token);
      }),
      map(() => true)
    );
  }

  logout(): void {
    throw new Error('Method not implemented.');
  }

  register(user: User): Observable<boolean> {
    throw new Error('Method not implemented.');
  }
}

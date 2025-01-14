import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import {
  AuthStatus,
  CheckTokenResponse,
  LoginResponse,
  User,
} from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);
  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  public currentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());

  private setAuthenticating(user: User, token: string): boolean {
    this._currentUser.set(user);
    this._authStatus.set(AuthStatus.authenticated);
    localStorage.setItem('token', token);

    return true;
  }

  login(email: string, password: string): Observable<boolean> {
    const url = `${this.baseUrl}/api/auth/login`;
    const body = { email, password };

    return this.http.post<LoginResponse>(url, body).pipe(
      map(({ token, user }) => this.setAuthenticating(user, token)),
      catchError(({ error }) => throwError(() => error.message))
    );
  }

  checkAuthStatus(): Observable<boolean> {
    const url = `${this.baseUrl}/api/auth/check-auth-status`;
    const token = localStorage.getItem('token');

    if (!token) return of(false);

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<CheckTokenResponse>(url, { headers }).pipe(
      map(({ token, user }) => this.setAuthenticating(user, token)),
      catchError(() => of(false))
    );
  }
}

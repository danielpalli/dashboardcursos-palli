import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../core/interfaces';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);

  #state = signal<State>({
    users: [],
    loading: false
  });

  constructor() {
    console.log('UserService created');
  }
}

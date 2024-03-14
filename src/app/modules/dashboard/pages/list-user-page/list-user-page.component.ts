import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  templateUrl: './list-user-page.component.html',
  styleUrl: './list-user-page.component.css'
})
export class ListUserPageComponent {
  public userService = inject(UserService);
}

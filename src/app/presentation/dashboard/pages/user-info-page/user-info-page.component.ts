import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-info-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserInfoPageComponent { }

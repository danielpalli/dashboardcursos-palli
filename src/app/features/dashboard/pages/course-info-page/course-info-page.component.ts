import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-course-info-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './course-info-page.component.html',
  styleUrl: './course-info-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CourseInfoPageComponent { }

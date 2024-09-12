import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-course-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './course-page.component.html',
  styleUrl: './course-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CoursePageComponent { }

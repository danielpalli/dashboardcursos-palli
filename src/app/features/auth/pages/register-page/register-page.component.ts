import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-[28rem]',
  },
})
export default class RegisterPageComponent {
  public information = input();
}

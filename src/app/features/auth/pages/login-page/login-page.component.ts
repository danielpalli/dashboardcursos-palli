import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-[28rem]',
  },
})
export default class LoginPageComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  public loginForm: FormGroup = this.fb.group({
    email:    ['feaeaarsssdhsh9s2113@gmail.com', [Validators.required, Validators.email]],
    password: ['Assdsafd12.', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe({
      next: () => {
        this.router.navigateByUrl('/dashboard');
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: error,
          text: 'Por favor, intenta de nuevo. Si el problema persiste, contacta a soporte.',
          confirmButtonText: 'Cerrar',
          confirmButtonColor: '#FF0000',
        });
      },
    });
  }
}

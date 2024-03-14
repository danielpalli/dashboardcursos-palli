import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  private fb = inject(FormBuilder);

  public loginForm: FormGroup = this.fb.group({
    enmail: [''],
    password: ['']
  });


}

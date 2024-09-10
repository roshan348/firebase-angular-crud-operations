import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  ForgotPasswordForm!: FormGroup;

  email: string = '';

  constructor(private auth: AuthService, private fb: FormBuilder) {
    this.ForgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}

  forgotPassword() {
    this.auth.forgotPassword(this.email);
    this.email = '';
  }
}

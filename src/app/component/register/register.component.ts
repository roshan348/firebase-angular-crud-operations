import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  RegisterForm!: FormGroup;
  email: string = '';
  password: string = '';
  hide = true;

  constructor(private auth: AuthService, private fb: FormBuilder) {
    this.RegisterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  register() {
    this.auth.register(this.email, this.password);

    this.email = '';
    this.password = '';
  }
}

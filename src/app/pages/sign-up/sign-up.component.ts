import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from '../../services/user-service.service';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatLabel,
    MatCardModule,
    MatGridTile,
    MatGridListModule,
    MatInputModule,
    CommonModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent implements OnInit {
  public signUpForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private userService: UserServiceService
  ) {
    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: [''],
      contact: [''],
      employeeId: [''],
      email: [''],
      password: [''],
    });
  }

  signUp() {
    this.userService.RegisterUser(this.signUpForm.value).subscribe(
      (res) => {
        if (this.signUpForm.valid) {
          alert('Registration Success');
          this.signUpForm.reset();
          this.router.navigate(['login']);
        } else {
          this.markAllFieldsAsTouched();
        }
      },
      (err) => {
        alert('Something went wrong');
      }
    );
  }
  private markAllFieldsAsTouched() {
    Object.keys(this.signUpForm.controls).forEach((field) => {
      const control = this.signUpForm.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }
}

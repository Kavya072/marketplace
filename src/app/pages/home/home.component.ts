import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatToolbar],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  employeeForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      employeeId: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      password: ['', Validators.required],
    });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
  productList() {
    this.router.navigate(['/productlisting']);
  }
}

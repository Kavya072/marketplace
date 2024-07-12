import { Component } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
interface Category {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-product-listing',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
  ],
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.css',
})
export class ProductListingComponent {
  public productListForm!: FormGroup;
  categories: Category[] = [
    { value: 'electronics-0', viewValue: 'Electronics & Appliances' },
    { value: 'furniture-1', viewValue: 'Furniture' },
    { value: 'carsandbikes-2', viewValue: 'Cars & Bikes' },
  ];
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private userService: UserServiceService
  ) {}

  ngOnInit(): void {
    this.productListForm = this.formBuilder.group({
      category: [''],
      productName: [''],
      price: [''],
      tradeType: [''],
      seller: sessionStorage.getItem('username'),
    });
  }

  productList() {
    this.userService.RegisterProduct(this.productListForm.value).subscribe(
      (res) => {
        alert(`Product is Added`);
        this.productListForm.reset();
      },
      (err: any) => {
        alert('Something went wrong');
      }
    );
  }
}

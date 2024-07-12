import { Component } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { MatCard, MatCardContent, MatCardHeader, MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-sales-record',
  standalone: true,
  imports: [MatCard, MatCardHeader, MatCardContent, MatCardModule, MatChipsModule, [NgFor], MatButtonModule],
  templateUrl: './product-sales-record.component.html',
  styleUrl: './product-sales-record.component.css'
})
export class ProductSalesRecordComponent {

  constructor(private service: UserServiceService, private router: Router) {
    this.LoadTradeSalesProduct();
  }

  productTradeSalesList: any;
  userLoggedIn = sessionStorage.getItem('username');

  LoadTradeSalesProduct() {
    this.service.GetAllProductTradeSalesList().subscribe((res: any) => {
      this.productTradeSalesList = res.filter((response: {seller: any}) => response.seller === this.userLoggedIn);
    });
  }

}

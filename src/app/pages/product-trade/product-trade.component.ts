import { Component } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { MatCard, MatCardContent, MatCardHeader, MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-trade',
  standalone: true,
  imports: [MatCard, MatCardHeader, MatCardContent, MatCardModule, MatChipsModule, [NgFor], MatButtonModule],
  templateUrl: './product-trade.component.html',
  styleUrl: './product-trade.component.css'
})
export class ProductTradeComponent {

  constructor(private service: UserServiceService, private router: Router) {
    this.LoadTradeProduct();
  }

  productTradeList: any;
  userLoggedIn = sessionStorage.getItem('username');

  LoadTradeProduct() {
    this.service.GetAllProductTradeList().subscribe((res: any) => {
      this.productTradeList = res.filter((response: {seller: any}) => response.seller === this.userLoggedIn);
    });
  }

  processRequestToBuy(code:any){
    this.service.GetTradeProductbyCode(code).subscribe(res=>{
        if(res){
            (this.service.ProcessTradeConfirmSales(res)).subscribe((res: any)=>{
              if(res){
                this.service.ProcessTradeConfirmPurchase(res).subscribe((res: any)=>{
                  if(res){
                    this.service.deleteProductFromTL(code).subscribe(res=>{
                      alert('Trade Confirm');
                    })
                  }
                })
              }
            })
          }
      })
  }  
}

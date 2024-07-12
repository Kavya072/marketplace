import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { MatCard, MatCardContent, MatCardHeader, MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatCard, MatPaginator, MatCardHeader, MatCardContent, MatTableModule, ReactiveFormsModule, MatCardModule, MatChipsModule, [NgFor], MatButtonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(private service: UserServiceService, private router: Router) {
   
    // this.SetAccesspermission();
    this.LoadProduct();

  }
  productList: any;
  dataSource: any;
  userLoggedIn = sessionStorage.getItem('username');
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  accessdata: any;
  haveedit = false;
  haveadd = false;
  havedelete = false;

  ngAfterViewInit(): void {

  }

  processRequestToBuy(id:any){
      this.service.GetProductbyCode(id).subscribe(res=>{
        if(res){
          Object.assign(res, {buyer: sessionStorage.getItem('username')});
          this.service.ProcessTrade(res).subscribe(data=>{
            this.service.deleteProductFromPL(id).subscribe(res => {
              alert("Submitted to Seller");
              window.location.reload();
            })
            
          })
        }
      })
      
  }
  
  LoadProduct() {
    this.service.GetAllProduct().subscribe((res: any) => {
      this.productList = res.filter((response: {seller: any}) => response.seller !== this.userLoggedIn);
        // this.dataSource = new MatTableDataSource(this.productList);
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
    });
  }
  displayedColumns: string[] = ['id', 'category', 'productName', 'action'];
  // SetAccesspermission() {
  //   this.service.Getaccessbyrole(this.service.getrole(), 'customer').subscribe(res => {
  //     this.accessdata = res;
  //     //console.log(this.accessdata);

  //     if(this.accessdata.length>0){
  //       this.haveadd=this.accessdata[0].haveadd;
  //       this.haveedit=this.accessdata[0].haveedit;
  //       this.havedelete=this.accessdata[0].havedelete;
  //       this.LoadCustomer();
  //     }else{
  //       alert('you are not authorized to access.');
  //       this.router.navigate(['']);
  //     }

  //   });
  // }
  // displayedColumns: string[] = ['code', 'name', 'creditlimit', 'action'];

  // updatecustomer(code: any) {

  //   if(this.haveedit){
  //      this.toastr.success('Success')
  //   }else{
  //     this.toastr.warning("You don't have access for Edit")
  //   }

  // }
  // removecustomer(code: any) {
  //   if(this.havedelete){
  //     this.toastr.success('Success')
  //  }else{
  //    this.toastr.warning("You don't have access for Delete")
  //  }
  // }
  // addcustomer() {
  //   if(this.haveadd){
  //     this.toastr.success('Success')
  //  }else{
  //    this.toastr.warning("You don't have access for Create")
  //  }
  // }


}
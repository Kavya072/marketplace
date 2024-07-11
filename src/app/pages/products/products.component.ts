import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatCard, MatPaginator, MatCardHeader, MatCardContent, MatTableModule, ReactiveFormsModule],
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
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  accessdata: any;
  haveedit = false;
  haveadd = false;
  havedelete = false;

  ngAfterViewInit(): void {

  }
  LoadProduct() {
    this.service.GetAllProduct().subscribe(res => {
      this.productList = res;
      this.dataSource = new MatTableDataSource(this.productList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
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
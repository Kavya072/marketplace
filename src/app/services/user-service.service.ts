import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http : HttpClient) { }

  apiurl='http://localhost:3000/';

  RegisterUser(inputdata:any){
    return this.http.post(this.apiurl+'signupUsersList',inputdata);
  }
  RegisterProduct(inputdata:any){
    return this.http.post(this.apiurl+'registeredProductList',inputdata);
  }
  ProcessTrade(inputdata: any){
    return this.http.post(this.apiurl+'tradeRecordList',inputdata);
  }
  
  ProcessTradeConfirmSales(inputdata: any){
    return this.http.post(this.apiurl+'salesRecordList',inputdata);
  }
   ProcessTradeConfirmPurchase(inputdata : any){
    return this.http.post(this.apiurl+'buyRecordList', inputdata);
   }
  GetProductbyCode(id:any){
    return this.http.get(this.apiurl+'registeredProductList/'+id);
  }
  GetTradeProductbyCode(id:any){
    return this.http.get(this.apiurl+'tradeRecordList/'+id);
  }
  Getall(){
    return this.http.get<any>(this.apiurl+'signupUsersList');
  }
  // updateuser(id:any,inputdata:any){
  //   return this.http.put(this.apiurl+'/'+id,inputdata);
  // }
  deleteProductFromPL(id :any){
    return this.http.delete(this.apiurl+'registeredProductList/'+id);
  }
  deleteProductFromTL(id :any){
    return this.http.delete(this.apiurl+'tradeRecordList/'+id);
  }
  isloggedin(){
    return sessionStorage.getItem('username')!=null;
  }
  GetAllProduct(){
    return this.http.get(this.apiurl+'registeredProductList');
  }
  GetAllProductTradeList(){
    return this.http.get(this.apiurl+'tradeRecordList')
  }
  GetAllProductTradeSalesList(){
    return this.http.get(this.apiurl+'salesRecordList')
  }

  GetAllProductTradeSalesBuyerList(){
    return this.http.get(this.apiurl+'buyRecordList')
  }

}

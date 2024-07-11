import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http : HttpClient) { }

  apiurl='http://localhost:3000/';

  RegisterUser(inputdata:any){
    return this.http.post(this.apiurl+'signupUsersList',inputdata)
  }
  RegisterProduct(inputdata:any){
    return this.http.post(this.apiurl+'registeredProductList',inputdata)
  }
  // GetUserbyCode(id:any){
  //   return this.http.get(this.apiurl+'/'+id);
  // }
  Getall(){
    return this.http.get<any>(this.apiurl+'signupUsersList');
  }
  // updateuser(id:any,inputdata:any){
  //   return this.http.put(this.apiurl+'/'+id,inputdata);
  // }
  isloggedin(){
    return sessionStorage.getItem('username')!=null;
  }
  GetAllProduct(){
    return this.http.get(this.apiurl+'registeredProductList');
  }
}

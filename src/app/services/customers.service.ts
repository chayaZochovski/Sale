import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';
import { Present } from '../models/present.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  thisCustomer : Customer = new Customer('');
  ifManager: boolean | undefined = undefined;

  constructor(private http : HttpClient) { }

  getCustomers(){
    let url = "api/customer/getCustomers";
    return this.http.get<Customer[]>(url);
  }

  addCustomer(cust : Customer) : Observable<Customer[]>{
   console.log('addddddddddddd');
    let url = "api/customer/addCustomer";
    return this.http.post<Customer[]>(url,cust);
  }

  addPresentToCustomer(present: Present) : Observable<boolean>{
    let url = `api/customer/addPresentToCustomer/${this.thisCustomer.name}`;
    return this.http.put<boolean>(url,present);
  }

  addCustomerPayed() : Observable<boolean>{
    let url = `api/customer/addCustomerPayed/${this.thisCustomer.name}`;
    return this.http.post<boolean>(url,{});
  }

  ruffle():Observable<Customer[]>{
    let url = `api/customer/ruffle`;
    return this.http.get<Customer[]>(url);
  }
}

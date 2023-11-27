import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  customers: Customer[] = [];
  name: FormControl = new FormControl('');
  customer: Customer = new Customer('');

  constructor(private srv: CustomersService, private router: Router) { }

  ngOnInit(): void {
    this.srv.getCustomers().subscribe(res => this.customers = res)
  }

  async login() {
    console.log('name=', this.name.value)
    let cust;
    await this.srv.getCustomers().subscribe(res => {
      console.log(res)
      cust = res.find(item => item.name == this.name.value);
      console.log('cust=', cust);

      if (cust == undefined) {
        this.srv.addCustomer(new Customer(this.name.value)).subscribe(() => {
          this.srv.getCustomers().subscribe(res => {
            let c = res.find(item => item.name == this.name.value);
            console.log(c)
            if (c) this.srv.thisCustomer = c;
          });
        }
        );

      }
      else if (cust)
        this.srv.thisCustomer = cust;
    });
    this.router.navigate(['customers/buy']);
  }
}

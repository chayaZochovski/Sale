import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { Present } from 'src/app/models/present.model';
import { CustomersService } from 'src/app/services/customers.service';
import { PresentsService } from 'src/app/services/presents.service';
import { ResultsService } from 'src/app/services/results.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit{
  
  presents : Present[] = [];
  present: Present=new Present();
  customer: Customer=new Customer('');
  amount: number = 1;
  cost: number= 0;
  flagSuccess: boolean = false;
  flagSubmit : boolean = false;
  flag: boolean=false;
  raffle: boolean = false;

  constructor(private psrv : PresentsService, public csrv: CustomersService, private router: Router, public rsrv: ResultsService){}

  ngOnInit(): void {
    this.psrv.getPresents().subscribe(res=>this.presents=res)
    this.customer= this.csrv.thisCustomer;
    this.rsrv.getRaffle().subscribe(res=>this.raffle=res);
  }

  select(p : Present, a:string){
    let times = parseInt(a);
    for(let i=1; i<=times;i++)
      this.csrv.addPresentToCustomer(p).subscribe(()=>{
        this.csrv.getCustomers().subscribe(res=>console.log(res));
        this.csrv.getCustomers().subscribe(res=>{
          let cust = res.find(item=>item.name==this.csrv.thisCustomer.name);
          if (cust!=undefined) 
            this.csrv.thisCustomer=cust;
        });
      });
    this.present=p;
  }

  pay(){
    // this.router.navigate(['pay']);
    this.csrv.thisCustomer.presents.forEach(item=> this.cost+=item.price);
    this.flag=true;
  }

  payOk(){
    this.csrv.addCustomerPayed().subscribe();
    this.flagSuccess=true;
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  password: string='123456'
  inputPassword: FormControl= new FormControl('');
  manager: boolean | undefined = undefined;
  public enterWithManager: boolean | undefined =undefined;

  
  constructor(public csrv: CustomersService){}

  ngOnInit(): void {
  }
  enterManager(){
    if(this.inputPassword.value==this.password){
      this.enterWithManager=true;
      this.csrv.ifManager=this.enterWithManager; 
    }
    else{
      alert("your password is incorrect, try again");
    }
     
  }

  enterCustomer(){
    this.enterWithManager=false;
    this.csrv.ifManager=this.enterWithManager;
  }
}

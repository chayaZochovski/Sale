import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { ResultsService } from 'src/app/services/results.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public csrv: CustomersService) { }

  ngOnInit(): void {
  }

logout(){
  
}

}

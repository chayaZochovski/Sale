import { Component, OnInit } from '@angular/core';
import { Present } from 'src/app/models/present.model';
import { CustomersService } from 'src/app/services/customers.service';
import { PresentsService } from 'src/app/services/presents.service';
import { ResultsService } from 'src/app/services/results.service';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-ruffle-result',
  templateUrl: './ruffle-result.component.html',
  styleUrls: ['./ruffle-result.component.css']
})
export class RuffleResultComponent implements OnInit {
  
  raffle: boolean = false;  
  winners: Customer[] = [];
  presents : Present[] = [];
  
  constructor(public csrv: CustomersService, public psrv: PresentsService, public rsrv : ResultsService) { }

  ngOnInit(): void {
    this.rsrv.getRaffle().subscribe(res=>this.raffle=res);
    this.rsrv.getWinners().subscribe(res=>this.winners=res);
    this.psrv.getPresents().subscribe(res=>this.presents=res);
  }

  doRuffle() {
    this.csrv.ruffle().subscribe((res) => { this.rsrv.setWinners(res).subscribe(res=>this.rsrv.getWinners().subscribe(res=>this.winners=res));});
    this.rsrv.setRaffle().subscribe(res=>this.raffle=res);
  }

}

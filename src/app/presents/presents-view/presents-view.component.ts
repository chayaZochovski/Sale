import { Component, OnInit } from '@angular/core';
import { HomeComponent } from 'src/app/home/home.component';
import { Present } from 'src/app/models/present.model';
import { CustomersService } from 'src/app/services/customers.service';
import { PresentsService } from '../../services/presents.service';

@Component({
  selector: 'app-presents-view',
  templateUrl: './presents-view.component.html',
  styleUrls: ['./presents-view.component.css']
})
export class PresentsViewComponent implements OnInit {

  constructor(public srv: PresentsService, public csrv: CustomersService) { }
  presentToEdit: Present | null = null;
  flagAdd: boolean=false;
  flagEdit: boolean=false;
  presents: Present[] = [];
  

  // donaters: string[] = ['','chaya','tamar','mali','shira','nechama'];

  ngOnInit(): void {
    this.srv.getPresents().subscribe((res:Present[])=> {
      this.presents = res;
    });    
    console.log(this.csrv.ifManager)
  }
  
  edit(present: Present) {
    this.flagEdit = true;
    this.presentToEdit = present;
  }

  delete(present: Present) {
    this.srv.deletePresent(present).subscribe((res:Present[])=> {
      this.presents = res;
    });    
  }

  add(){
    this.flagAdd=true;
  }

  addPresent(present: Present | null){
    if (present) this.presents.push(present);
  }

  checkName(name: string){

  }

}

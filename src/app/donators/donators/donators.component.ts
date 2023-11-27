import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Donator } from 'src/app/models/donator.model';
import { CustomersService } from 'src/app/services/customers.service';
import { PresentsService } from 'src/app/services/presents.service';
import { DonatorsService } from '../../services/donators.service';

@Component({
  selector: 'app-donators',
  templateUrl: './donators.component.html',
  styleUrls: ['./donators.component.css']
})
export class DonatorsComponent implements OnInit {

  donators : Donator[] = [];
  donatorName : FormControl = new FormControl('');
  editFlag: boolean = false;
  name:string='';

  constructor(private dsrv : DonatorsService, private psrv : PresentsService , public csrv: CustomersService) { }

  ngOnInit(): void {
    this.dsrv.getDonators().subscribe(res=>this.donators=res);
  }

  presentsOfDonator(d: Donator){
    let result;
    this.psrv.getPresents().subscribe(res=>result = res.filter(item=>item.donater==d.name));
    return result;
  }

  edit(){
    let d = this.donators.find(item=>item.name==this.name)
    if(d) this.dsrv.editDonator(d,this.donatorName.value).subscribe(()=>{
      this.editFlag = false;
      this.dsrv.getDonators().subscribe(res=>this.donators=res);
    });
  }

  delete(d:Donator){
    console.log("d")
    this.dsrv.deleteDonator(d).subscribe(()=>this.dsrv.getDonators().subscribe(res=>this.donators=res))
  }
  
  add(){
    this.dsrv.addDonator(new Donator(this.donatorName.value)).subscribe(res=>this.donators=res);
  }

}

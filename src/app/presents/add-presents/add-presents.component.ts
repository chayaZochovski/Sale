import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Donator } from 'src/app/models/donator.model';
import { Present } from 'src/app/models/present.model';
import { DonatorsService } from 'src/app/services/donators.service';
import { PresentsService } from '../../services/presents.service';

@Component({
  selector: 'app-add-presents',
  templateUrl: './add-presents.component.html',
  styleUrls: ['./add-presents.component.css']
})
export class AddPresentsComponent implements OnInit {

  frmGroup: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    donater: new FormControl('',Validators.required),
    price: new FormControl(10 ,Validators.required),
  });

  present : Present = new Present();
  maxIndex: number = 0;
  index: number = 0;

  donators : Donator[] = [];

  constructor(private route : ActivatedRoute, private srv : PresentsService,private router: Router, private dsrv : DonatorsService) { }

  ngOnInit(): void {
   this.srv.getPresents().subscribe(res=>res.forEach(item=>{
    if(item.number>this.maxIndex)
      this.maxIndex = item.number;
  }));
  this.dsrv.getDonators().subscribe(res=>this.donators=res)

  }

  onSubmitAdd(){
    let present = new Present();
    present.number=this.maxIndex+1;
    present.name=this.frmGroup.controls['name'].value;
    present.donater=this.frmGroup.controls['donater'].value;
    present.price=this.frmGroup.controls['price'].value;

    this.srv.addPresent(present).subscribe(res=>console.log(res));
    this.srv.getPresents().subscribe();
    this.router.navigate(['presents']);
  }

  uniqueName(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.srv.getPresents().subscribe(res=>res.find(item => item.name === control.value.toString()&&item.number!=this.present?.number) ? { uniqueName: { value: control.value } } : null)
    };
  }

}

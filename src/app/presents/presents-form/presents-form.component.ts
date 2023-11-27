import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Donator } from 'src/app/models/donator.model';
import { Present } from 'src/app/models/present.model';
import { DonatorsService } from 'src/app/services/donators.service';
import { PresentsService} from '../../services/presents.service';

@Component({
  selector: 'app-presents-form',
  templateUrl: './presents-form.component.html',
  styleUrls: ['./presents-form.component.css']
})
export class PresentsFormComponent implements OnInit {

  constructor(private route : ActivatedRoute, private srv : PresentsService,private router: Router, private dsrv: DonatorsService) {}

  //@Input()
  //index : number = 0;
  // @Input()
  // flagEdit : boolean = false;
  // @Input()
  // flagAdd : boolean = false;
  // @Output()
  // flagAddChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  present : Present = new Present();
  // @Output()
  // presentChange: EventEmitter<Present | null> = new EventEmitter<Present | null>();
  // @Output()
  // presentToAdd: EventEmitter<Present | null> = new EventEmitter<Present | null>();
  // @Input()
  // presents : Present[] = [];
  //  @Input()
  //  donaters: string[] = [];
   
   
   donators : Donator[] = [];


  frmGroup: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required, this.uniqueName()]),
    donater: new FormControl('',Validators.required),
    price: new FormControl(10 ,Validators.required),
  });


  ngOnInit(): void {
    let n = 0;
    this.route.params.subscribe((p: Params) => {
      n = p['number'];
    });
    this.srv.getPresents().subscribe(res=>{
      let p = res.find(item=>item.number==n);
      if (p) {
        this.present = p;
        this.frmGroup = new FormGroup({
          name: new FormControl(this.present?.name,[Validators.required]),
          donater: new FormControl(this.present?.donater,Validators.required),
          price: new FormControl(!this.present?.price ? 10 : this.present?.price,Validators.required),
        });
      }
    });      
    this.dsrv.getDonators().subscribe(res=>this.donators=res)
  }

  onSubmitEdit(){
    if (this.present){
      this.present.name=this.frmGroup.controls['name'].value;
      this.present.donater=this.frmGroup.controls['donater'].value;
      this.present.price=this.frmGroup.controls['price'].value;
      this.srv.editPresent(this.present).subscribe(res=>console.log(res));
      this.srv.getPresents().subscribe();
      this.router.navigate(['presents']);
    }
  }

  uniqueName(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.srv.getPresents().subscribe(res=>res.find(item => item.name === control.value.toString()&&item.number!=this.present?.number) ? { uniqueName: { value: control.value } } : null)
    };
  }
}

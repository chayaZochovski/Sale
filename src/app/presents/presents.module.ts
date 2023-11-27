import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentsViewComponent } from './presents-view/presents-view.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PresentsService } from '../services/presents.service';
import { RouterModule } from '@angular/router';
import { PresentsFormComponent } from './presents-form/presents-form.component';
import { AddPresentsComponent } from './add-presents/add-presents.component';
import { DonatorsService } from '../services/donators.service';
import { CustomersService } from '../services/customers.service';
import { RuffleResultComponent } from './ruffle-result/ruffle-result.component';



@NgModule({
  id:"pm",
  declarations: [
    PresentsViewComponent,
    PresentsFormComponent,
    AddPresentsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{path:'', component: PresentsViewComponent},
                           {path: 'editPresent/:number', component: PresentsFormComponent},
                           {path: 'addPresent', component: AddPresentsComponent},
                           {path: 'ruffleResult', component: RuffleResultComponent}
                          ])
  ],
  exports:[
    RouterModule
  ]
})
export class PresentsModule { }

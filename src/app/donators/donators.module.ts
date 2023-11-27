import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonatorsComponent } from './donators/donators.component';
import { RouterModule } from '@angular/router';
import { DonatorsService } from '../services/donators.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PresentsService } from '../services/presents.service';


@NgModule({
  id: "dm",
  declarations: [
    DonatorsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{path:'', component: DonatorsComponent}])
  ],
  exports:[
    RouterModule
  ]
})
export class DonatorsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuyComponent } from './buy/buy.component';
import { LoginComponent } from './login/login.component';
import { PresentsService } from '../services/presents.service';
import { CustomersService } from '../services/customers.service';




@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{path:'', component: LoginComponent},
  {path:'buy', component: BuyComponent}
  ])
  ]
})
export class CustomersModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu/menu.component';
import { DonatorsService } from './services/donators.service';
import { PresentsService } from './services/presents.service';
import { BuyComponent } from './customers/buy/buy.component';
import { LoginComponent } from './customers/login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomersService } from './services/customers.service';
import { HttpClientModule } from '@angular/common/http';
import { RuffleResultComponent } from './presents/ruffle-result/ruffle-result.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BuyComponent,
    LoginComponent,
    HomeComponent,
    RuffleResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],    bootstrap: [AppComponent]
})
export class AppModule { }

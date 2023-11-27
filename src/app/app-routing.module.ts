import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path:'presents', pathMatch:'prefix',
    loadChildren: () => import('./presents/presents.module').then(m => m.PresentsModule)},
  {path:'donators', pathMatch:'prefix',
    loadChildren: () => import('./donators/donators.module').then(m => m.DonatorsModule)}, 
    {path:'customers', pathMatch:'prefix',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)},
    {path:'ruffleResult', pathMatch:'prefix',
    loadChildren: () => import('./presents/presents.module').then(m => m.PresentsModule)}    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

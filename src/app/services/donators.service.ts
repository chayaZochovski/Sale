import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donator } from '../models/donator.model';

@Injectable({
  providedIn: 'root'
})
export class DonatorsService {

  constructor(private http : HttpClient) { }

  getDonators() : Observable<Donator[]>{
    let url = "api/donator/getDonators";
    return this.http.get<Donator[]>(url);
  }

  editDonator(donator : Donator, name: string) : Observable<boolean>{
    let url = `api/donator/editDonator/${name}`;
    return this.http.put<boolean>(url,donator);
  }

  addDonator(donator : Donator) : Observable<Donator[]>{
    let url = "api/donator/addDonator";
    return this.http.post<Donator[]>(url,donator);
  }

  deleteDonator(donator : Donator) : Observable<Donator[]>{
    console.log("ds")
    let url = "api/donator/deleteDonator";
    return this.http.delete<Donator[]>(url,{body:donator});
  }

}

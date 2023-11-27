import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';
import { Present } from '../models/present.model';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private http: HttpClient) {  }
  
  getRaffle():Observable<boolean>{
    let url = 'api/results/getRuffle';
    return this.http.get<boolean>(url);
  }

  setRaffle():Observable<boolean>{
    let url = 'api/results/setRuffle';
    return this.http.put<boolean>(url,{});
  }

  getWinners():Observable<Customer[]>{
    let url = 'api/results/getWinners';
    return this.http.get<Customer[]>(url);
  }

  setWinners(c : Customer[]):Observable<boolean>{
    let url = 'api/results/setWinners';
    return this.http.put<boolean>(url,c);
  }

  getPresentsToShow():Observable<Present[]>{
    let url = 'api/results/getPresentsToShow';
    return this.http.get<Present[]>(url);
  }

  setPresentsToShow(p : Present[]):Observable<boolean>{
    let url = 'api/results/setPresentsToShow';
    return this.http.put<boolean>(url,p);
  }
}

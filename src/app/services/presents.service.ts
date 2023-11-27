import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of} from 'rxjs';
import { Present } from '../models/present.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})

export class PresentsService extends BehaviorSubject<Present[]>{

  public presents : BehaviorSubject<Present[]> = new BehaviorSubject<Present[]>([]);

  constructor(private http: HttpClient) { super([]); }

  getPresents() : Observable<Present[]>{
     let url:string = 'api/present/getPresents';
     return this.http.get<Present[]>(url);
  }

  addPresent(present: Present): Observable<boolean>{
    let url = 'api/present/addPresent';
    return this.http.post<boolean>(url, present);
  }

  editPresent(present: Present): Observable<boolean>{
    let url = 'api/present/editPresent';
    return this.http.put<boolean>(url, present);
  }

  deletePresent(present: Present):Observable<Present[]>{
    let url = 'api/present/deletePresent';
    return this.http.delete<Present[]>(url, {body: present});
  }

  saveList(res: Present[]){
    this.presents.next(res);
  }

  public read(): void {     
    if (this.presents.getValue().length) {
      return super.next(this.presents.getValue());
    }
    this.getPresents().subscribe((res:Present[])=> {
      this.saveList(res);
    }); 
  }

  
}

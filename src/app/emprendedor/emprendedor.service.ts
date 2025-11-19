import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Emprendedor } from './emprendedor';


@Injectable({
  providedIn: 'root'
})
export class EmprendedorService {
  
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getEmprendedores(): Observable<Emprendedor[]> {
    return this.http.get<Emprendedor[]>(this.apiUrl + environment.apiUrlEnd);
  }

  
  getEmprendedorById(id: number): Observable<Emprendedor> {
    return this.http.get<Emprendedor>(this.apiUrl + id.toString() + environment.apiUrlEnd);
  }
  

}

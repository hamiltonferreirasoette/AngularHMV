import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Stock, { Register } from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class RegisterPService {

  readonly baseUrl ='https://wachter-users-api.herokuapp.com'

  constructor(private http: HttpClient) { }

  async getStocks (): Promise<Stock[]>{
    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }

  
Register(obj:Register):Observable<Register>{

  return this.http.post<Register>(`${this.baseUrl}/patients/`,obj);
}

}

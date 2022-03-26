import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Stock, { Register } from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  readonly baseUrl ='https://boot-camp-santander-dio.herokuapp.com/bootcamp'

  constructor(private http: HttpClient) { }

  async getStocks (): Promise<Stock[]>{
    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }



//login(obj:Login):Observable<Login>{

//  return this.http.post<Login>(`${this.baseUrl}/login`,obj);//.pipe(takeUntil((s: Register) => s ))
//}

}

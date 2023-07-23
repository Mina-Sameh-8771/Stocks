import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StockServiceService {

  constructor(private httpClient: HttpClient) { }

  getStocks(){
    return this.httpClient.get(environment.baseUrl + '/api/Stock/GetStocks');
  }
}

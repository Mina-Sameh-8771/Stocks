import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { orderModel } from '../models/orderModel';


@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private httpClient: HttpClient) { }

  getOrders(){
    return this.httpClient.get(environment.baseUrl + '/api/Order/GetOrders');
  }

  createOrder(order : orderModel){  
    return this.httpClient.post(environment.baseUrl + '/api/Order/CreateOrder', order);
  }
}

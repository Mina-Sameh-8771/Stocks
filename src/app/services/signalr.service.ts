import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr"
import { Observable, BehaviorSubject } from 'rxjs';
import { stockModel } from '../models/stockModel';
import { orderModel, orderViewModel } from '../models/orderModel';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class SignalrService {
    private dataSource = new BehaviorSubject<stockModel>({} as any);
    private orderSource = new BehaviorSubject<orderViewModel>({} as any);


    private hubConnection: signalR.HubConnection;

    public startConnection = () => {
      this.hubConnection = new signalR.HubConnectionBuilder()
                              .withUrl(environment.baseUrl + '/stockHub')
                              .build();
      this.hubConnection
        .start()
        .then(() => console.log('Connection started'))
        .catch(err => console.log('Error while starting connection: ' + err))
    }
    
    public stockPricetDataListener = () => {
      this.hubConnection.on('stockpricedata', (stockID , newPrice) => {
        debugger
        this.dataSource.next({id : stockID , price : newPrice} as stockModel);
      });
    }

    public orderDataListener = () => {
      this.hubConnection.on('neworderdata', (orderData) => {
        debugger
        this.orderSource.next(orderData as orderViewModel);
      });
    }

    public getStockObservable(){
      return this.dataSource.asObservable();
    }

    public getOrderObservable(){
      return this.orderSource.asObservable();
    }
}

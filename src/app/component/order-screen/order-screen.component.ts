import { Component, OnInit } from '@angular/core';
//import { MatSnackBar } from '@angular/material/snack-bar';
import { orderModel, orderViewModel } from 'src/app/models/orderModel';
import { stockModel } from 'src/app/models/stockModel';
import { OrderServiceService } from 'src/app/services/order-service.service';
import { SignalrService } from 'src/app/services/signalr.service';
import { StockServiceService } from 'src/app/services/stock-service.service';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-order-screen',
  templateUrl: './order-screen.component.html',
  styleUrls: ['./order-screen.component.css']
})

export class OrderScreenComponent implements OnInit {
  orderItems : orderViewModel[];
  stocks: stockModel[];

  

  constructor(private orderService:OrderServiceService,
    private stockService:StockServiceService,
    private signalrService:SignalrService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((response : orderViewModel[]) => {
      this.orderItems = response;

      this.signalrService.getOrderObservable().subscribe(data =>{
        if( Object.keys(data).length !== 0 ){
          this.orderItems.unshift(data);
        }
      });

    }); 

    this.stockService.getStocks().subscribe((response : stockModel[]) => {
      this.stocks = response;
    });
  }

  createOrder(personName: string, quantity: string ,action: any) {

    

    let stock:string = action._value;

    if(personName === "" || quantity === "" || stock === undefined){
      alert('Please insert all fields');
      return;
    }

    this.orderService.createOrder({
      personName: personName,
      quantity: Number(quantity),
      stockID: stock
    } as orderModel).subscribe(response => {
    });
  };

}

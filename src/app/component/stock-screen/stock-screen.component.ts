import { Component, OnInit } from '@angular/core';
import { stockModel } from 'src/app/models/stockModel';
import { SignalrService } from 'src/app/services/signalr.service';
import { StockServiceService } from 'src/app/services/stock-service.service';

@Component({
  selector: 'app-stock-screen',
  templateUrl: './stock-screen.component.html',
  styleUrls: ['./stock-screen.component.css']
})
export class StockScreenComponent implements OnInit {

  stockItems :stockModel[];

  constructor(private stockService:StockServiceService,
    private signalrService:SignalrService
    ) {
     }

  ngOnInit(): void {
    this.stockService.getStocks().subscribe((response : stockModel[]) => {
      this.stockItems = response;

      this.signalrService.getStockObservable().subscribe(data =>{
        let indexForUpdate = this.stockItems.findIndex(stock => stock.id === data.id);
        if(indexForUpdate != -1){
          this.stockItems[indexForUpdate].price = data.price;
        }
      });

    });

    
  }

}

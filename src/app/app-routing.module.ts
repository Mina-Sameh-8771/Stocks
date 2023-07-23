import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderScreenComponent } from './component/order-screen/order-screen.component';
import { StockScreenComponent } from './component/stock-screen/stock-screen.component';

const routes: Routes = [
  { path: '', component:  StockScreenComponent},
  { path: 'order', component:  OrderScreenComponent},
  { path: 'stock', component:  StockScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

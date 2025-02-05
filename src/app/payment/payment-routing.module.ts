import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentModule } from './payment.module';
import { UpiComponent } from './upi/upi.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {path:'card',component:CardComponent},
  {path:'upi',component:UpiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }

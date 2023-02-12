import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentAndDeliveryRoutingModule } from './paymentAndDelivery-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PaymentAndDeliveryRoutingModule,
    SharedModule
  ]
})
export class PaymentAndDeliveryModule { }

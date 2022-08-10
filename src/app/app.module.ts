import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CouponsModule } from './coupons/coupons.module';
import { CreateCouponComponent } from './coupons/create-coupon/create-coupon.component';
import { ListCouponComponent } from './coupons/list-coupon/list-coupon.component';
import { ViewCouponComponent } from './coupons/view-coupon/view-coupon.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CouponsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { OrderModule } from 'ngx-order-pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddProductComponent } from './add-product/add-product.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { UpdateProductComponent } from './update-product/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    DetailComponent,
    HomeComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    OrderModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

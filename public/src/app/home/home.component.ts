import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpService } from '../http.service';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  all_products: any = []

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.getAllProducts()
    .subscribe(
      (data) => {this.all_products = data}
    )
  }

}

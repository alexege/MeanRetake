import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  current_product = null;
  updated_product:any = null;

  errors:any = []

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) {
    this._route.paramMap.subscribe(params => {
      this._httpService.getOneProduct(params.get("id")).subscribe(data => {
        this.current_product = data;
        this.updated_product = {name: this.current_product.name, qty: this.current_product.qty, price: this.current_product.price, _id: this.current_product._id}
      })
    })
  }

  ngOnInit() {
  }

  updateProduct(){
    console.log("Updating product");
    this._httpService.editProduct(this.updated_product).subscribe(data => {
      console.log(data);
      if(data['error']){
        console.log("There was an error");
        this.errors = data['error'];
      } else {
        this._router.navigateByUrl('/')
      }
    })
  }

  resetFields(){
    console.log("Resetting fields");
    this.updated_product = {name: this.current_product.name, qty: this.current_product.qty, price: this.current_product.price, _id: this.current_product._id}
  }
}

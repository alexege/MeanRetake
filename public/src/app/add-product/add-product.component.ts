import { Component, OnInit, Output } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  newProduct:any = {name: "", qty: "", price: ""}
  errors:any = [];

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(){

  }

  submitNewProduct(){
    console.log("Creating a new product");
    this._httpService.createNewProduct(this.newProduct).subscribe(data => {
      console.log(data);
      if(data['error']){
        console.log("There was a problem: ", data['error']);
        this.errors = data['error']
      } else {
        this.newProduct = {name: "", qty: "", price: ""}
      }
      this._router.navigateByUrl('/');
    })
  }
}

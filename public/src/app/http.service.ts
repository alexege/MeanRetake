import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _httpService: HttpClient) { }
  
  getAllProducts(){
    return this._httpService.get('/all');
  }
  
  getOneProduct(id){
    return this._httpService.get(`/getOne/${id}`)
  }

  createNewProduct(newProduct){
    return this._httpService.post('/new', newProduct)
  }

  delete(id){
    return this._httpService.delete(`/delete/${id}`)
  }

  editProduct(updated_product){
    return this._httpService.put('/update' ,updated_product)
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  current_product = null;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) {
    this._route.paramMap.subscribe(data => {
      this._httpService.getOneProduct(data.get("id")).subscribe(data => {
        this.current_product = data;
      })
    })
  }

  ngOnInit() {
  }

  delete(id){
    this._httpService.delete(id).subscribe(data => {
      console.log("Deleted: ", data);
    })
    this._router.navigateByUrl('/');
  }

}

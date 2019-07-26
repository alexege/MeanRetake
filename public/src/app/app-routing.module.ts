import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { UpdateProductComponent } from './update-product/update-product.component';
// import { AddReviewComponent } from './add-review/add-review.component';
// import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: "", pathMatch:"full", redirectTo:"products"},
  { path: "products", component: HomeComponent },
  { path: "products/new", component: AddProductComponent },
  { path: "products/:id", component: DetailComponent },
  { path: "products/:id/edit", component: UpdateProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

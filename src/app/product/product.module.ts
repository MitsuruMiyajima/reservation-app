import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// ===== declarationsで宣言したコンポーネントをインポートする =====

import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CommonModule } from '@angular/common';
import { ProductService } from './shared/product.service';

const routes: Routes = [
  {
  path: 'products', component: ProductComponent,
    children: [
      { path: '', component: ProductListComponent},
      { path: ':productId', component: ProductDetailComponent}
    ]
  }


];
@NgModule({

  // ===== declarationsにコンポーネント名を入れることでこのモジュール紐づいているコンポーネントを宣言する =====

  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: []
})
export class ProductModule { }

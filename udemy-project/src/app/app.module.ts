

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ShopComponent } from '../shop/shop.component';
import { ProductListComponent } from '../product-list/product-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  { path: 'shop', component: ShopComponent },
  { path: 'product-list', component: ProductListComponent },
];

@NgModule({
  imports: [
    // RouterModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    AppComponent,
  ],
  declarations: [ShopComponent, ProductListComponent],
  providers: [],
})
export class AppModule {}

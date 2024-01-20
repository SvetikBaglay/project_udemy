import { Component } from "@angular/core";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})

export class ShopComponent {
  userName: string = '';
  products = [
    'TestProduct',
    'TestProduct 2'
  ]

  onResetValue() {
    this.userName = ''
  }

  onCreateProduct(){
    this.products.push(this.userName)
  }
}


import { Component } from "@angular/core";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  // styleUrls: ['./product-list.component.scss']
  styles: [`
    .online {
      color: #fff;
    }
  `]
})

export class ProductListComponent {
  serverId: number = 10;
  serverStatus: string = 'offline'

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  getServerStatus(){
    return this.serverStatus
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red'
  }
}

import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  public products:any=[];
  public grandTotal!:number;
  constructor(private cartService:CartService){}
  ngOnInit():void{
      this.cartService.getProducts()
      .subscribe(res=>{
        this.products=res;
        this.grandTotal=this.cartService.getTotalPrice();
      })
  }

}

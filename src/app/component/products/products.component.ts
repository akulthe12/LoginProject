import { Component } from '@angular/core';
import { ApisService } from 'src/app/service/apis.service';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public productList:any;
  constructor(private apis:ApisService,private cartService:CartService){}
  ngOnInit():void{
    this.apis.getProduct()
    .subscribe(res=>{
      this.productList=res;
      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      })
    })
  }
addtocart(item:any){
  this.cartService.addtoCart(item)
}
}

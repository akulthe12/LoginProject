import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.scss']
})
export class Header1Component {
  public totalItem:number=0;
constructor(private cartService:CartService){}
ngOnInit():void{
  this.cartService.getProducts()
  .subscribe(res=>{
    this.totalItem=res.length;

  })
}
}

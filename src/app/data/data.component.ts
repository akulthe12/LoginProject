import { Component } from '@angular/core';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {

public productlist:any=[];
item:any;
constructor(private userdata:UserdataService){
  
  }
  ngOnInit()
  {
    this.userdata.getData().subscribe(res=>{
      this.productlist=res;
    })
  }
}




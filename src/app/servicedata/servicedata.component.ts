import { Component } from '@angular/core';
import { ServicesdataService } from '../service/servicesdata.service';

@Component({
  selector: 'app-servicedata',
  templateUrl: './servicedata.component.html',
  styleUrls: ['./servicedata.component.scss']
})
export class ServicedataComponent {
  users:any;
 
  constructor(private ServicesData:ServicesdataService){

    this.users=ServicesData.users;
    console.log("ServicesData",ServicesData.users)
  }
   

}

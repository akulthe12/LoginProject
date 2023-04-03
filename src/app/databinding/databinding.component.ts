import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent {
  userName:string="";
  title="Hello.....I am Archana Kulthe";
  name="Archana Kulthe";
  show=false;

  onShow()
  {
    alert("successful")
  }
  consoledata(event:any)
  {
   console.log(event.target.value) ;
  }

}

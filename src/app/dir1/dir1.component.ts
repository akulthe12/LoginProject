import { Component } from '@angular/core';

@Component({
  selector: 'app-dir1',
  templateUrl: './dir1.component.html',
  styleUrls: ['./dir1.component.scss']
})
export class Dir1Component {
 
  color = 'red';
  changeColor()
  {
    this.color='blue';
  }
  isActive()
  {
    
  }
  show=true;
  




   employeelist=[
    {name:'archana',address:'pune',salary:30000},
    {name:'pankaj',address:'rahuri',salary:50000},
    {name:'renuka',address:'thane',salary:45000},
  ];
  
}

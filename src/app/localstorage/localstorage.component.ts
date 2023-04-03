import { Component } from '@angular/core';

@Component({
  selector: 'app-localstorage',
  templateUrl: './localstorage.component.html',
  styleUrls: ['./localstorage.component.scss']
})
export class LocalstorageComponent {
  constructor() {

    // const person = {     //update a  record
    //   name: "Archana",
    //   address:"pune",
    //   mobileNo:123456789,
    // }
    // const personToJSON=JSON.stringify(person)
    // localStorage.setItem("person",personToJSON)
    
    // console.log(personToJSON)
    localStorage.removeItem("person");//Remove record
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesdataService {
  static users: any;

  constructor() { }
  users=[
    {name:"archana",address:'pune'},
    {name:"pankaj", address:'rahuri'},
    {name:"renuka",address:'thane'}
  ]
}

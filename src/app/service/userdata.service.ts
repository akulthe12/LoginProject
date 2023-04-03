import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http:HttpClient) { }

  getData()
  {
    let url=" https://fakestoreapi.com/products/";
    return this.http.get(url);
  }
}

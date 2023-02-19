import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postLogin(data:any)
  {
    return this.http.post<any>("http://localhost:3000/logindb/",data)
  }
getLogin(){
return this.http.get<any>("http://localhost:3000/logindb/");
}
putDetails(data:any,id:number){
  return this.http.put<any>("http://localhost:3000/logindb/"+id,data);

}
deleteDetails(id:number)
{
  return this.http.delete<any>("http://localhost:3000/logindb/"+id)
}
}
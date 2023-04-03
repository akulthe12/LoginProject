import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private baseUrl = 'http://localhost:3000/register'; // Replace with your API base URL

  constructor(private http: HttpClient) { }

  sendOtp(mobileNumber: string): Observable<any> {
    const url = `${this.baseUrl}/send-otp`;
    const body = { mobileNumber };
    return this.http.post(url, body);
  }

  verifyOtp(mobileNumber: string, otp: string): Observable<any> {
    const url = `${this.baseUrl}/verify-otp`;
    const body = { mobileNumber, otp };
    return this.http.post(url, body);
  }

 
}

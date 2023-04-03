import { Component } from '@angular/core';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  mobileNumber: string = '';
  otp: string = '';

  constructor(private authService: AuthServiceService) {}

  onSubmit() {
    this.authService.sendOtp(this.mobileNumber).subscribe(
      (response: any) => {
        if (response.success) {
          this.authService.verifyOtp(this.mobileNumber, this.otp).subscribe(
            (response: any) => {
              if (response.success) {
                // OTP verified, proceed with registration
                // Call a service or API to register the user
                console.log('User registered!');
              } else {
                alert('Invalid OTP');
              }
            },
            (error: any) => {
              console.error('Error verifying OTP', error);
            }
          );
        } else {
          alert('Unable to send OTP');
        }
      },
      (error: any) => {
        console.error('Error sending OTP', error);
      }
    );
  }
}

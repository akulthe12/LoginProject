import { Component } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent {
  mobileNumber!: string;
  otpSent: boolean = false;
  enteredOTP!: string;
  // generateOTP!:string;

    sendotp() 
    {
      if (this.mobileNumber && this.mobileNumber.length == 10) {
        const generateOTP = () => {
          const length = 6;
          let otp = "";
          for (let i = 0; i < length; i++) {
            otp += Math.floor(Math.random() * 10);
          }
          return otp;
        };
        const otp = generateOTP();
        console.log(`OTP: ${otp} sent to ${this.mobileNumber}`);
        this.otpSent = true;
    
        // Populate the OTP input fields with the generated OTP
        const otpChars = otp.split("");
        const inputIds = ["first", "second", "third", "fourth", "fifth", "sixth"];
        for (let i = 0; i < otpChars.length; i++) {
          const input = document.getElementById(inputIds[i]) as HTMLInputElement;
          input.value = otpChars[i];
        }
      } else {
        console.log("Please enter a valid mobile number");
      }
    
}
  resendotp() {
    alert("otp resend sucessfully...")
  }




verifyOTP() 
{
  if (this.enteredOTP) {
    const otpInputElement = document.getElementById("otp-input") as HTMLInputElement | null;
    const generatedOTP = otpInputElement?.value.replace(/\s/g, '');
    if (generatedOTP && this.enteredOTP.trim() === generatedOTP.trim()) {
      console.log(`Entered OTP: ${this.enteredOTP} verified for ${this.mobileNumber}`);
      console.log('enter otp is correct')
      // Here you can write the code to do something when the OTP is verified
    } else {
      console.log("Entered OTP is incorrect");
    }
  } else {
    console.log("Please enter the OTP received on your mobile number");
  }


}

}


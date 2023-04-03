import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.scss']
})
export class Login1Component {

  
    lnForm =new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(5)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\+?\d{10,}$/)]),
      otp: new FormControl('', [Validators.required])
    })
  
login()
{

}
sendOTP() {
  const phoneControl = this.lnForm.get('phone');
  if (phoneControl) {
    const phoneNumber = phoneControl.value;
}
}
}
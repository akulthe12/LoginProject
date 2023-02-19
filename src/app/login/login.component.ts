import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  actionBtn: string ="Login"
  loginForm!:FormGroup;
  constructor(private formBuilder:FormBuilder, 
    private api:ApiService,
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private http:HttpClient,
    private dialogref:MatDialogRef<LoginComponent>){}
  ngOnInit():void{
    this.loginForm=this.formBuilder.group(
      {
        email:new FormControl('',[Validators.required,Validators.email]),
        password:new FormControl('',[Validators.required,Validators.minLength(8)]),
  
      });
      if(this.editData)
      {
        this.actionBtn="Update";
        this.loginForm.controls['email'].setValue(this.editData.email);
        this.loginForm.controls['password'].setValue(this.editData.password)
      }
  }
  login(){
    if(!this.editData)
    {
      if(this.loginForm.valid){
        this.api.postLogin(this.loginForm.value).subscribe({
          next:(res)=>{
            alert("Login details added sucessfully");
            this.loginForm.reset();
            this.dialogref.close('login');
          },
          error:()=>
          {
            alert("Error while adding the details")
          }
          
        })
      }
    }else{
        this.updateDetails()
      }
    }
    

 updateDetails()
 {
   this.api.putDetails(this.loginForm.value,this.editData.id)
   .subscribe({
    next:(res)=>
    {
      alert("Details updated Successfully");
      this.loginForm.reset();
      this.dialogref.close('update');
    },
    error:()=>{
      alert("Error while updating the records!!")
    }
   })
 }
}



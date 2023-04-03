import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { DialogComponent } from './dialog/dialog.component';
import {MatError, MatFormFieldControl, MatFormFieldModule, MatLabel, MAT_ERROR} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FooterComponent } from './footer/footer.component';
import { ProgressComponent } from './progress/progress.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Login1Component } from './login1/login1.component';
import { TableComponent } from './table/table.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Parent1Component } from './parent1/parent1.component';
import { StudentComponent } from './student/student.component';
import { Dir1Component } from './dir1/dir1.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CounterevenoddComponent } from './counterevenodd/counterevenodd.component';
import { LocalstorageComponent } from './localstorage/localstorage.component';
import { RegisterComponent } from './register/register.component';
import { Header1Component } from './component/header1/header1.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { ServicedataComponent } from './servicedata/servicedata.component';
import { DataComponent } from './data/data.component';
import { MaterialModule } from './material/material.module';
import { Data1Component } from './data1/data1.component';
import { OtpComponent } from './otp/otp.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { Header3Component } from './header3/header3.component';
import { EmployeeListComponent } from './employee-list/employee-list.component'
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DialogComponent,
    FooterComponent,
    ProgressComponent,
    NavbarComponent,
    Login1Component,
    TableComponent,
    EmployeeComponent,
    ParentComponent,
    Child1Component,
    Parent1Component,
    StudentComponent,
    Dir1Component,
    DatabindingComponent,
    CounterevenoddComponent,
    LocalstorageComponent,
    RegisterComponent,
    Header1Component,
    CartComponent,
    ProductsComponent,
    ServicedataComponent,
    DataComponent,
    Data1Component,
    OtpComponent,
    Header3Component,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    DragDropModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    NgOtpInputModule,
    MatSelectModule,
    MatCardModule,
    MatRadioModule
   
    
   
   
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

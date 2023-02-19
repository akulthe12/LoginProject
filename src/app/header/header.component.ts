import { LoginComponent } from '../login/login.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../services/api.service';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  displayedColumns: string[] = ['email', 'password','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private login: MatDialog, private api: ApiService) { }
  ngOnInit():void{
    this.getAllLoginDetails();
  }
  
  
  openLogin() {
    this.login.open(LoginComponent, {
      width: "30%"
    }).afterClosed().subscribe(val=>{
      if(val==='login')
      this.getAllLoginDetails();
    })
  }
  getAllLoginDetails() {
    this.api.getLogin().subscribe({
      next: (res) => {
       this.dataSource=new MatTableDataSource(res);
       this.dataSource.paginator=this.paginator;
       this.dataSource.sort=this.sort;
      },
      error: (err) => {
        alert("Error while fetching the Records.. !!")
      }
    })
  }
  editLogin(row:any)
  {
    this.login.open(LoginComponent,{
     width:'30%',
     data:row 
    }).afterClosed().subscribe(val=>
      {
        if(val==='update'){
          this.getAllLoginDetails();
        }
      })

    }
  deleteDetails(id:number)
  {
    this.api.deleteDetails(id)
    .subscribe({
      next:(res)=>{
        alert("Details Deleted Sucessfully ");
        this.getAllLoginDetails();
      },
      error:()=>{
        alert("Error while deleting the product")
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onDrop(event: CdkDragDrop<any[]>) {
    const prevIndex = this.dataSource.data.findIndex((d) => d === event.item.data);
    moveItemInArray(this.dataSource.data, prevIndex, event.currentIndex);
    this.dataSource.data = this.dataSource.data.slice();
  }
  
  }



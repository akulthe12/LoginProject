import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



  export interface UserData 
  {
    id:number;
    name: string;
    email: string;
  }
  

   const Name: string[] = [
    'varsha',
    'archana',
    
  ];
    const Email: string[] = [
    'varsha@gmail.com',
    'archana@gmail.com',
    
  ];
  @Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
  })

  export class TableComponent  implements AfterViewInit{
    displayedColumns: string[] = ['id', 'name', 'email'];
    dataSource!: MatTableDataSource<UserData>;
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
  
    constructor() {
      // Create 100 users
      // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
  
      // Assign the data to the data source for the table to render
      // this.dataSource = new MatTableDataSource(users);
    }
    ngAfterViewInit(){
      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    }
}
function createNewUser(arg0: number): any {
  throw new Error('Function not implemented.');
}


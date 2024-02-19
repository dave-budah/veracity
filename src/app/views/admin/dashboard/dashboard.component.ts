import {Component, OnInit, ViewChild} from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader} from "@angular/material/card";
import {
  MatCellDef,
  MatColumnDef, MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user";
import {NgForOf, NgIf} from "@angular/common";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {MatButton} from "@angular/material/button";
import {DateAgoPipe} from "../../../shared/pipes/dateago.pipe";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatTable,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatColumnDef,
    NgForOf,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCellDef,
    MatSort,
    MatSortHeader,
    MatPaginator,
    MatCardFooter,
    MatButton,
    NgIf,
    DateAgoPipe
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  greeting!: string
  currentDate!: string
  formattedDate = ''
  datasource: any
  userData!: User[]

  displayColumns = ['firstname', 'lastname', 'email', 'role', 'createdAt']
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private userService: UserService) {
    // Greeting based on time of day
    const now = new Date();
    const hours = now.getHours();
    if (hours < 12) {
      this.greeting = 'Good Morning'
    } else if (hours < 18) {
      this.greeting = 'Good Afternoon'
    } else {
      this.greeting = 'Good evening!'
    }
  }

  ngOnInit(): void {
    const now = new Date()
    const day = now.getDate()
  //  const month = now.getMonth() + 1; // getMonth() returns a 0-based index, so add 1
    const month = now.toLocaleString('default', { month: 'long' }) // get the month name
    const year = now.getFullYear()

    //this.formattedDate = `${day < 10 ? '0' : ''}${day} ${month < 10 ? '0' : ''}${month} ${year}`
    this.formattedDate = `${day} ${month} ${year}`

      this.loadInitialData()
    }
    loadInitialData() {
      this.userService.getAllUsers().subscribe( user => {
        this.userData = user
        this.datasource = new MatTableDataSource(this.userData)
        this.datasource.paginator = this.paginator
        this.datasource.sort = this.sort
      })
  }
}

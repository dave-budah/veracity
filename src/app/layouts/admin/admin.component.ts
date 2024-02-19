import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NavbarComponent} from "../../shared/components/navbar/navbar.component";
import {DashboardComponent} from "../../views/admin/dashboard/dashboard.component";
import {SidenavComponent} from "../../views/admin/sidenav/sidenav.component";
import {BodyComponent} from "../../views/admin/body/body.component";
import {HeaderComponent} from "../../views/admin/header/header.component";

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    DashboardComponent,
    SidenavComponent,
    BodyComponent,
    HeaderComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  isSidenavCollapsed: boolean = false;
  screenWidth: number = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth
    this.isSidenavCollapsed = data.collapsed
  }
}

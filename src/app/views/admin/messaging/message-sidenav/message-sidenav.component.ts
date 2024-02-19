import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-message-sidenav',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './message-sidenav.component.html',
  styleUrl: './message-sidenav.component.css'
})
export class MessageSidenavComponent {

}

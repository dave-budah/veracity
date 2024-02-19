import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./shared/components/navbar/navbar.component";
import {BnNgIdleService} from "bn-ng-idle";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  constructor(private bnNgIdleService: BnNgIdleService) { }

  ngOnInit(): void {
    this.bnNgIdleService.startWatching(60).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        // add logout logic here
        console.log('timed out');
      }
    })
  }
}



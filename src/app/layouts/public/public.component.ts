import {Component, HostListener} from '@angular/core';
import {NavbarComponent} from "../../shared/components/navbar/navbar.component";
import {RouterOutlet} from "@angular/router";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {BottomFooterComponent} from "../../shared/components/bottom-footer/bottom-footer.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-public',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet,
    FooterComponent,
    BottomFooterComponent,
    NgIf
  ],
  templateUrl: './public.component.html',
  styleUrl: './public.component.css'
})
export class PublicComponent {
  isScreenWidthGreaterThan560px!: boolean;
  isScreenWidthLessThan560px!: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }

  constructor() {
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    this.isScreenWidthGreaterThan560px = window.innerWidth >= 560;
    this.isScreenWidthLessThan560px = window.innerWidth < 560;
  }
}

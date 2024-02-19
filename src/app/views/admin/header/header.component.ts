import {Component, HostListener, Inject, Input, OnInit} from '@angular/core';
import {DOCUMENT, NgClass, NgForOf} from "@angular/common";
import {messages, notifications, userItems} from "./header-data";
import {CdkMenu, CdkMenuItem, CdkMenuModule} from "@angular/cdk/menu";
import {OverlayModule} from "@angular/cdk/overlay";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass,
    CdkMenu,
    NgForOf,
    CdkMenuItem,
    CdkMenuModule,
    OverlayModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: any) {}
  ngOnInit(): void {}

  @Input() collapsed = false
  @Input() screenWidth = 0

  // Fullscreen toggle //
  @HostListener('document:fullscreenchange', ['$event'])
  @HostListener('document:webkitfullscreenchange', ['$event'])
  @HostListener('document:mozfullscreenchange', ['$event'])
  @HostListener('document:MSFullscreenChange', ['$event'])
  fullscreenmodes(event: any) {
    this.chkScreenMode();
  }

  isFullScreen!: boolean;

  chkScreenMode() {
    this.isFullScreen = !!this.document.fullscreenElement;
  }
  toggleFullScreen() {
    if (this.document.fullscreenElement) {
      this.document.exitFullscreen();
    } else {
      const elem = this.document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(); // Safari
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen(); // IE11
      }
    }
  }

  // End of fullscreen toggle //


  notifications = notifications
  userItems = userItems
  messages = messages

  getHeadClass(): string {
    let styleClass = ''
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed'
    } else {
      styleClass = 'head-md-screen'
    }
    return styleClass
  }
}

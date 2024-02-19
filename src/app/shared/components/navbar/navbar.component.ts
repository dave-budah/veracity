import {ChangeDetectionStrategy, Component, HostListener, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 150) {
      this.renderer.setStyle(document.querySelector('.navbar'), 'background', '#f4f7fa');
    } else {
      this.renderer.setStyle(document.querySelector('.navbar'), 'background', 'transparent');
    }
    if (scrollPosition > 400) {
      this.renderer.setStyle(document.querySelector('.nav__wrap'), 'background', '#f4f7fa');
    } else {
      this.renderer.setStyle(document.querySelector('.nav__wrap'), 'background', 'transparent');
    }
  }
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

}

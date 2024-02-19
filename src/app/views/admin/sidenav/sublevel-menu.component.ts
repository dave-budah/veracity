import {Component, Input, OnInit} from '@angular/core';
import {fadeInOut, INavbarData} from "./helpers";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-sublevel-menu',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgClass,
    RouterLink,
    RouterLinkActive
  ],
  template: `
    <ul
      *ngIf="collapsed && data.items && data.items.length > 0"
      [@submenu]="expanded
      ? {value: 'visible', params: {transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)',
      height: '*',
      }} : {value: 'hidden',
      params: {transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)',
      height: '0'}
      }"
      class="sublevel-nav">
     <li *ngFor="let item of data.items" class="sublevel-nav-item">
       <a class="sublevel-nav-link"
            (click)="handleClick(item)"
            *ngIf="item.items && item.items.length > 0"
          [ngClass]="getActiveClass(item)">
            <i class="bi bi-dot sublevel-link-icon"></i>
            <span class="sublevel-link-text" @fadeInOut *ngIf="collapsed">{{item.label}}</span>
            <i *ngIf="item.items && collapsed" class="menu-collapse-icon"
            [ngClass]="!item.expanded? 'bi bi-chevron-right' : 'bi bi-chevron-down'"
            ></i>
       </a>
       <a class="sublevel-nav-link"
        *ngIf="!item.items ||(item.items && item.items.length === 0)"
        [routerLink]="[item.routeLink]"
        routerLinkActive="active-sublevel"
        [routerLinkActiveOptions]="{exact: true}">
         <i class="bi bi-dot sublevel-link-icon"></i>
         <span class="sublevel-link-text" @fadeInOut *ngIf="collapsed">{{item.label}}</span>
       </a>
       <div *ngIf="item.items && item.items.length > 0">
            <app-sublevel-menu
              [collapsed]="collapsed"
              [multiple]="multiple"
              [expanded]="item.expanded"
            ></app-sublevel-menu>
       </div>
     </li>
    </ul>
  `,
  styles: ``,
  animations: [
    fadeInOut,
    trigger('submenu', [
      state('hidden',
        style({
          height: '0px',
          overflow: 'hidden'
        })),
      state('visible',
        style({
          height: '*',
        })),
      transition('hidden <=> visible', [
        style({
          overflow: 'hidden'
        }),
        animate('{{transitionParams}}')]),
        transition('void => *', animate(0))
      ])
    ]
})
export class SublevelMenuComponent implements OnInit {

  @Input() data: INavbarData = {
    routeLink: '',
    icon: '',
    label: '',
    items: []
  };
  @Input() collapsed = false
  @Input() animating: boolean | undefined
  @Input() expanded?: boolean | undefined
  @Input() multiple: boolean = false

  constructor(public router: Router) {}
  ngOnInit(): void {
  }

  handleClick(item: any): void {
    if (!this.multiple) {
      if (this.data.items && this.data.items.length > 0) {
        for (let modelItem of this.data.items) {
          if (item != modelItem && modelItem.expanded) {
            modelItem.expanded = false
          }
        }
      }
    }
    item.expanded = !item.expanded
  }

  getActiveClass(data: INavbarData): string {
    return this.router.url.includes(data.routeLink)? 'active-sublevel' : ''
  }

  protected readonly transition = transition;
}

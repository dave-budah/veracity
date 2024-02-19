import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private spinnerVisibility = new BehaviorSubject<boolean>(false);

  constructor() { }

  showSpinner() {
    this.spinnerVisibility.next(true);
  }

  hideSpinner() {
    this.spinnerVisibility.next(false);
  }

  getSpinnerVisibility() {
    return this.spinnerVisibility.asObservable();
  }
}

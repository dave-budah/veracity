import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  apiUrl = 'api/users/'
  getAllUsers() {
    return this.http.get<User[]>(this.apiUrl)
  }

  haveAccess() {
    return true
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserC } from './user_c';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  _url = 'http://localhost:3000/enroll';
  constructor(private _http: HttpClient) {}
  enroll(user: UserC) {
    return this._http.post<any>(this._url, user);
  }
}
export class RouteService{
  constructor(){}
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url:string="http://localhost:3000/user/";
  constructor(private _http:HttpClient) { }

  getUser()
  {
    return this._http.get(this.url);
  }

}

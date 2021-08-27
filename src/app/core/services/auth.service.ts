import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/models/user/user';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService { 
  constructor(private http: HttpClient) { }

  getToken(data: FormData)
  {
    console.log(data);
    return this.http.post<UserModel>(`${environment.dev.apiUrl}/Auth/login`,data);
  }
}

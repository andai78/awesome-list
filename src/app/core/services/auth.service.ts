import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { User } from '../../shared/models/user';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private user: BehaviorSubject<User|null> = new BehaviorSubject(null);
  public readonly user$: Observable<User|null> = this.user.asObservable();

  constructor(private http: HttpClient) { }

  login(email:string, pass:string): Observable<User|null> {
    return of(new User());
  }

  register(name: string, email: string, password: string): Observable<User|null> {
    const url =
   `${environment.firebase.auth.baseURL}/signupNewUser?key=
    ${environment.firebase.apiKey}`;
    const data = {
      email,
      password,
      returnSecureToken: true
     };
     const httpOptions = {
      headers: new HttpHeaders({'Content-Type':  'application/json'})
     };
     return this.http.post<User>(url, data, httpOptions);
  }

  logout(): Observable<null> {
    return of(null);
  }

}

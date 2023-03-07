import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ReloadRouteService} from "./reload-router.service";
import {catchError, map, Observable} from "rxjs";
import {User} from "../dataClasses/user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = false;
  user: User;
  role: string = "student";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private reloadRouteService: ReloadRouteService, private http: HttpClient) {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      this.user = parsedUser;
      this.role = parsedUser.role;
    }
  }

  getUser(email: string): Observable<User> {
    const body = {email: email};
    return this.http.post<{operationStatus, users}>('/api/v1/user', body)
      .pipe(
        map((userData) => {
          console.log(userData);
          console.log(userData.operationStatus);
          console.log(userData.users[0]);
          console.log(userData.users[0].role)
          this.user = userData.users[0];
          this.role = userData.users[0].role;
          return this.user;
        }),
        catchError((error) => {
          console.error('Error getting user:', error);
          throw error;
        })
      );
  }


  login(email: string, password: string): void {
    console.log("login() called");
    // Perform authentication logic
    this.getUser(email).subscribe(() => {
      if (this.user.email === email && this.user.password === password) {
        this.isLoggedIn = true;
        //Line below is used, that we are still logged in after refresh
        localStorage.setItem('user', JSON.stringify(this.user));
      }
    });
  }

  logout(): void {
    // Perform logout logic
    console.log("logout() called");
    this.isLoggedIn = false;
    localStorage.removeItem('user');
    this.reloadRouteService.redirectTo("");
  }
}

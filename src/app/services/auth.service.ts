import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private admin!: string;
  constructor() {

  }

  login(username: string, password: any): boolean {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("admin", username);
      return true;

    }
    return false;
  }
  logout(): any {
    localStorage.removeItem("admin");

  }
  getAdmin(): any {
    localStorage.getItem("admin");
  }
  isLoggedIn(): boolean {
    return this.getAdmin !== null;
  }

  isLoggedInAndNotAdmin(): boolean {
    return !(this.isLoggedIn() && this.admin === 'admin');
  }

}

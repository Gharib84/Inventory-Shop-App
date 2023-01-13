import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  msg: string = "";
  constructor(private router: Router, public auth: AuthService) {

  }

  logiin(username: string, password: string): boolean  {
    if (!this.auth.login(username, password)) {
      this.msg = " Incorrect credentials";
      setTimeout(() => {
        this.msg = ""
      }, 2500);
      return false
    }
    this.router.navigateByUrl('products');
    return true;
  }
  logout(): boolean {
    this.auth.logout();
    return false;
  }
}

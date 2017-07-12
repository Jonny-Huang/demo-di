import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  isLogin = false;
  login_count = 0;
  logout_count = 0;
  constructor() { }

  login() {
    if (!this.isLogin) {
      this.isLogin = true;
      this.login_count++;
    }
  }

  logout() {
    if (this.isLogin) {
      this.isLogin = false;
      this.logout_count++;
    }
  }
}

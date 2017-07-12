import { Component } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  loginService: LoginService;
  constructor(_loginService: LoginService) {
    this.loginService = _loginService;
  }
  login() { this.loginService.login() };
  logout() { this.loginService.logout() };
}

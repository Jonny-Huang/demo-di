import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html'
})
export class Page1Component {
  constructor(public loginService: LoginService) { }
  login() { this.loginService.login() };
  logout() { this.loginService.logout() };
}

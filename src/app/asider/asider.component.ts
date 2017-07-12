import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-asider',
  templateUrl: './asider.component.html'
})
export class AsiderComponent {
  constructor(public loginService: LoginService) { }
}

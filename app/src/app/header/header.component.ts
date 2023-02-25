import {Component, Input} from '@angular/core';
import {ReloadRouteService} from "../services/reload-router.service";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  collapsed: boolean = true;

  constructor(private reloadRouterService: ReloadRouteService, public loginService: LoginService) { //wird hier gebraucht, da in Methode von Parent mit reingegeben
  }
}

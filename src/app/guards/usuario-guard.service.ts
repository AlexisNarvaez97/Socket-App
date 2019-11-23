import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { WebSocketService } from '../services/web-socket.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {

  constructor(public wsService: WebSocketService, public router: Router) { }

  canActivate() {

    if (this.wsService.getUsuario()) {
      return true;
    } else {
      this.router.navigateByUrl('/');
      return false;
    }
  }
}

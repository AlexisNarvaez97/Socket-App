import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../../services/web-socket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre = '';

  constructor(public wsService: WebSocketService, private router: Router) { }

  ngOnInit() {
  }

  ingresar() {

    if (this.nombre.trim().length === 0 ) {
      return;
    }

    // console.log(this.nombre);
    this.wsService.loginWS(this.nombre).then( () => {

      this.router.navigateByUrl('/mensajes');

    });

    this.nombre = '';
  }

}

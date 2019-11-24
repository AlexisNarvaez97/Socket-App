import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from '../../services/chat-service.service';
import { Observable } from 'rxjs';
import { WebSocketService } from '../../services/web-socket.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuariosActivosObs: Observable<any>;

  constructor(private chatService: ChatServiceService, private wsSocket: WebSocketService) { }

  ngOnInit() {

    this.usuariosActivosObs = this.chatService.getUsuariosActivos();

    // Emitir usuarios
    this.chatService.emitirUsuariosActivos();

  }

  logout() {
    this.wsSocket.logoutWS();
  }

}

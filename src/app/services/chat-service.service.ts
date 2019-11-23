import { Injectable } from '@angular/core';
import { WebSocketService } from './web-socket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor(public wsService: WebSocketService) { }


  sendMessage(mensaje: string) {
    const payload = {
      de: 'Alexis',
      cuerpo: mensaje
    };
    this.wsService.emit('mensaje', payload);
  }

  getMessages() {

    return this.wsService.listen();

  }

}

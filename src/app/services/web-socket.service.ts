import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  public socketStatus = false;

  constructor(private socket: Socket) {
    this.checkStatus();
  }


  checkStatus() {
    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidor');
      this.socketStatus = false;
    });
  }

  emit(evento: string, payload?: any, callback?: any) {


    console.log('Emitiendo mensaje');

    this.socket.emit(evento, payload, callback);
    // emit('EVENTO'), payload, callback
  }


  listen() {
    return this.socket.fromEvent('nuevo-mensaje');
  }


}

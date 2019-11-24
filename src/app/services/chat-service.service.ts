import { Injectable } from "@angular/core";
import { WebSocketService } from "./web-socket.service";

@Injectable({
  providedIn: "root"
})
export class ChatServiceService {
  constructor(public wsService: WebSocketService) {}

  sendMessage(mensaje: string) {
    const payload = {
      de: this.wsService.getUsuario().nombre,
      cuerpo: mensaje
    };
    this.wsService.emit("mensaje", payload);
  }

  getMessages() {
    return this.wsService.listen("nuevo-mensaje");
  }

  getMessagesPrivate() {
    return this.wsService.listen("mensaje-privado");
  }


  getUsuariosActivos() {
    return this.wsService.listen("usuarios-activos");
  }

  emitirUsuariosActivos() {
    return this.wsService.emit('obtener-usuarios');
  }

}

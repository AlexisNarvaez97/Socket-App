import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { Usuario } from "../clases/usuario";

@Injectable({
  providedIn: "root"
})
export class WebSocketService {
  public socketStatus = false;

  public usuario: Usuario;

  constructor(private socket: Socket) {
    this.cargarStorage();
    this.checkStatus();
  }

  checkStatus() {
    this.socket.on("connect", () => {
      console.log("Conectado al servidor");
      this.socketStatus = true;
    });

    this.socket.on("disconnect", () => {
      console.log("Desconectado del servidor");
      this.socketStatus = false;
    });
  }

  emit(evento: string, payload?: any, callback?: any) {
    console.log("Emitiendo mensaje");

    this.socket.emit(evento, payload, callback);
    // emit('EVENTO'), payload, callback
  }

  listen(evento: string) {
    return this.socket.fromEvent(evento);
  }

  getUsuario() {
    return this.usuario;
  }

  loginWS(nombre: string) {

    return new Promise( (resolve, reject) => {
      this.emit('configurar-usuario', { nombre }, resp => {
        this.usuario = new Usuario(nombre);
        this.guardarStorage();
        resolve();
      });
    });
    // this.socket.emit("configurar-usuario", { nombre }, resp => {
    //   console.log(resp);
    // });
  }

  guardarStorage() {
    localStorage.setItem('usuario', JSON.stringify(this.usuario));
  }

  cargarStorage() {

    if (localStorage.getItem('usuario')) {
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
      this.loginWS(this.usuario.nombre);
    }


  }


}

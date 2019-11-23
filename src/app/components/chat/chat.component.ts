import { Component, OnInit, OnDestroy } from "@angular/core";
import { ChatServiceService } from "../../services/chat-service.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit, OnDestroy {
  texto = "";

  mensajes: any[] = [];

  elemento: HTMLElement;

  messagesSuscription: Subscription;

  constructor(private chatService: ChatServiceService) {}

  ngOnInit() {
    this.elemento = document.getElementById("chat-mensajes");

    this.messagesSuscription = this.chatService.getMessages().subscribe(msg => {
      this.mensajes.push(msg);

      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 50);

      // console.log(msg);
    });
  }

  ngOnDestroy() {
    this.messagesSuscription.unsubscribe();
  }

  enviar() {
    if (this.texto.trim().length === 0) {
      return;
    }

    // console.log(this.texto);
    this.chatService.sendMessage(this.texto);
    this.texto = "";
  }
}

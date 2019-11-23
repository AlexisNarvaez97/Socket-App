import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './services/web-socket.service';
import { ChatServiceService } from './services/chat-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private wsService: WebSocketService, public chatService: ChatServiceService) {
  }

  ngOnInit() {

    // this.chatService.sendMessage('Hola desde Angular UHYEAH');

  }

}

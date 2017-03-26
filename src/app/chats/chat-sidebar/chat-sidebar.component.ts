import { Component, Input } from '@angular/core';
import { Chat } from '../shared/chat.model';

@Component({
    selector: 'ct-chat-sidebar',
    styleUrls: ['./chat-sidebar.component.scss'],
    templateUrl: './chat-sidebar.component.html'
})

export class ChatSidebarComponent {
    @Input() chats: Promise<Chat[]>;
}
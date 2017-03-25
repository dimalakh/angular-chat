import { Injectable } from '@angular/core';
import { CHATS } from './chat.mock';

@Injectable()
export class ChatService {
    getAll() {
        return Promise.resolve(CHATS);
    }

    
}
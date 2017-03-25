import { Injectable } from '@angular/core';
import { MESSAGES } from './message.mock';

@Injectable()
export class MessageService {
    getAll(chatId) {
        const messages = MESSAGES.filter(message => message.chatId === chatId);
        return Promise.resolve(messages);
    }

    sendMessage(chatId, message, user) {
        
    }
}
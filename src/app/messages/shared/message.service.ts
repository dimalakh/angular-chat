import { Injectable } from '@angular/core';
import { MESSAGES } from './message.mock';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MessageService {
    private search$: BehaviorSubject<string> = new BehaviorSubject('');

    getAll(chatId) {
        const messages = MESSAGES.filter(message => message.chatId === chatId);
        return Promise.resolve(messages);
    }

    public setSeachValue(value: string): void {
        this.search$.next(value);
  }

    public getSearchValue(): BehaviorSubject<string> {
        return this.search$;
  }
}
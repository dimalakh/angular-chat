import { Pipe, PipeTransform } from '@angular/core';
import { Chat } from './shared/chat.model';

@Pipe({name: 'filterByName'})

export class FilterChatByNamePipe implements PipeTransform {
    public transform(chats: Chat[], filterValue: string) {
        if (chats) {
            return chats.filter(chat => {
                
                return chat.name.match(new RegExp(filterValue, 'gi'));
            });
        } else {
            return chats;
        }
    }

}
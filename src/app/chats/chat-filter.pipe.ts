import { Pipe, PipeTransform } from '@angular/core';
import { Chat } from './shared/chat.model';

@Pipe({name: 'filterByName'})

export class FilterByNamePipe implements PipeTransform{
    public transform(chats: Chat[], filterValue: string): Chat[] {
        return chats ?
        chats.filter(chat => chat.name === filterValue)
        :chats;
    }
}
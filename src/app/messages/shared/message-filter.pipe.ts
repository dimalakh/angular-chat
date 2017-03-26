import { Pipe, PipeTransform } from '@angular/core';
import { Message } from './message.model';
import { MessageService } from './message.service';

@Pipe({name: 'filterByMessage'})

export class FilterMessageByTextPipe implements PipeTransform {
    public message: Message;
    public transform(messages: Message[], filterValue: string) {
        if (messages) {
            return messages.filter(message => {
                
                return message.text.match(new RegExp(filterValue, 'gi'));
            });
        } else {
            return messages;
        }
    }

}
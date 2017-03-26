import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { ChatService} from '../../shared/chat.service';

@Component({
    selector: 'ct-chat-side-nav',
    styleUrls: ['./chat-side-nav.component.scss'],
    templateUrl: './chat-side-nav.component.html'
})

export class ChatSideNavComponent {
    searchValue: string = '';

    constructor(private service: ChatService) { }

    onSearchValueChange(value: string) {
        this.service.setSeachValue(value);
    }

     onBlur(): void {
        this.searchValue = '';
        this.service.setSeachValue('');
    }

}
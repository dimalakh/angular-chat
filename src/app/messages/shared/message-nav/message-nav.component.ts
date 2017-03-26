import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { MessageService } from '../message.service';

@Component({
    selector: 'ct-message-nav',
    styleUrls: ['./message-nav.component.scss'],
    templateUrl: './message-nav.component.html'
})

export class MessageNavComponent {
    private searchValue: string = '';
    
    constructor(private service: MessageService) {}

    onSearchValueChange(value: string) {
        this.service.setSeachValue(value);
    }
}
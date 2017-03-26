import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MessageService } from '../message.service';
import { Message } from '../message.model';
import { Subscription } from "rxjs";

@Component({
  selector: 'ct-message-list',
  styleUrls: ['./message-list.component.scss'],
  templateUrl: './message-list.component.html'
})

export class MessageListComponent implements OnInit {

  chatId: number;
  messages: Promise<Message[]>;
  private searchValue: string = '';
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private messageService: MessageService) {

              }
          

  public ngOnInit() {
      this.route.params.subscribe((params: Params) => {
        this.chatId = +params['id'];
        this.messages = this.messageService.getAll(this.chatId);
      });

      this.subscription = this.messageService
      .getSearchValue()
      .subscribe(value => this.searchValue = value)
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

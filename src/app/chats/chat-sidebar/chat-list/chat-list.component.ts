import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Chat } from '../../shared/chat.model';
import { Form } from '@angular/forms';
import { ChatService } from '../../shared/chat.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'ct-chat-list',
  styleUrls: ['./chat-list.component.scss'],
  templateUrl: './chat-list.component.html'
})

export class ChatListComponent implements OnInit, OnDestroy {
  @Input() chats: Promise<Chat[]>;
  private selectedId: number;
  private searchValue: string = '';
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ChatService
  ) {}

  public ngOnInit(): void {
    this.subscription = this.service
      .getSearchValue()
      .subscribe(value => this.searchValue = value)
  }

  select(chat) {
    this.selectedId = chat.id;
    this.router.navigate(['chat', chat.id])
    this.searchValue = '';
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
import { NgModule } from '@angular/core';
import { SharedModule }  from '../shared';
import { ChatsComponent } from './chats.component';
import { ChatListComponent } from './chat-sidebar/chat-list';
import { ChatDetailComponent } from './chat-detail';
import { ChatNewComponent } from './chat-new';
import { ChatHolderComponent } from './chat-holder';
import { ChatsRoutingModule } from './chats-routing.module';
import { MessagesSharedModule } from '../messages';
import { ChatService } from './shared/chat.service';
import { MessageService } from '../messages/shared/message.service';
import { FilterChatByNamePipe } from "./chat-filter.pipe";
import { ChatSidebarComponent } from "./chat-sidebar/chat-sidebar.component";
import { ChatSideNavComponent } from "./chat-sidebar/chat-side-nav/chat-side-nav.component";

@NgModule({
  declarations: [
    ChatsComponent,
    ChatListComponent,
    ChatDetailComponent,
    ChatNewComponent,
    ChatHolderComponent,
    FilterChatByNamePipe,
    ChatSidebarComponent,
    ChatSideNavComponent
  ],
  imports: [
    SharedModule,
    MessagesSharedModule,
    ChatsRoutingModule
  ],
  providers: [
    ChatService,
    MessageService
  ]
})

export class ChatsModule {}

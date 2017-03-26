import { NgModule } from '@angular/core';
import { SharedModule }  from '../../shared';
import { MessageListComponent } from './message-list';
import { MessageNewComponent } from './message-new';
import { MessageNavComponent } from "./message-nav/message-nav.component";
import { FilterMessageByTextPipe } from "./message-filter.pipe";

@NgModule({
  declarations: [
    MessageListComponent,
    MessageNewComponent,
    MessageNavComponent,
    FilterMessageByTextPipe
  ],
  imports: [
    SharedModule
  ],
  exports: [
    MessageListComponent,
    MessageNewComponent,
    MessageNavComponent
  ],
  providers: []
})

export class MessagesSharedModule {}

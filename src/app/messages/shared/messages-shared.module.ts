import { NgModule } from '@angular/core';
import { SharedModule }  from '../../shared';
import { MessageListComponent } from './message-list';
import { MessageNewComponent } from './message-new';
import { MessageNavComponent } from "./message-nav/message-nav.component";

@NgModule({
  declarations: [
    MessageListComponent,
    MessageNewComponent,
    MessageNavComponent
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

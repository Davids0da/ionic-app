import { NgModule } from '@angular/core';
import { MessageListComponent } from './message-list/message-list';
import { ChatComponent } from './chat/chat';
import { InsertMessageComponent } from './insert-message/insert-message';
import { MessageItemComponent } from './message-item/message-item';
@NgModule({
	declarations: [MessageListComponent,
    ChatComponent,
    InsertMessageComponent,
    MessageItemComponent],
	imports: [],
	exports: [MessageListComponent,
    ChatComponent,
    InsertMessageComponent,
    MessageItemComponent]
})
export class ComponentsModule {}

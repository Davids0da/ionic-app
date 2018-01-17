import { NgModule } from '@angular/core';
import { MessageListComponent } from './message-list/message-list';
import { ChatComponent } from './chat/chat';
import { InsertMessageComponent } from './insert-message/insert-message';
@NgModule({
	declarations: [MessageListComponent,
    ChatComponent,
    InsertMessageComponent],
	imports: [],
	exports: [MessageListComponent,
    ChatComponent,
    InsertMessageComponent]
})
export class ComponentsModule {}

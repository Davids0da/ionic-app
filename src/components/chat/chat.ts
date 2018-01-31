import { Component } from '@angular/core';
import { InsertMessageComponent } from '../insert-message/insert-message';

@Component({
    selector: 'chat',
    templateUrl: 'chat.html'
})
export class ChatComponent {
    public messages: Array<string> = ['fkjashdkjf', 'faksjdfsd'];
    text: string;

    constructor() {}

    public addMessage(message: string) {
        this.messages.push(message);
    }

    public filterMessages (messages) {

    }
}

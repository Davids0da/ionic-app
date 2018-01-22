import { Component } from '@angular/core';

@Component({
    selector: 'chat',
    templateUrl: 'chat.html'
})
export class ChatComponent {
    public messages: Array<string> = ['dksajfhaskd', 'fkjashdkjf'];
    text: string;

    constructor() {}

    public addMessage(message: string) {
        this.messages.push(message);
    }
}

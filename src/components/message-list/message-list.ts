import { Component, Input } from '@angular/core';

@Component({
    selector: 'message-list',
    templateUrl: 'message-list.html'
})
export class MessageListComponent {
    @Input() messages: Array<string>;
    public davidInfo: object = { ime: 'David', prezime: 'Milosavljevic' };
    constructor() {}
}

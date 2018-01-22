import { Component, Input } from '@angular/core';

@Component({
    selector: 'message-item',
    templateUrl: 'message-item.html'
})
export class MessageItemComponent {
    @Input() message: string;
    @Input() poruka: string;
    public uvuceno: boolean = false;

    constructor() {}

    public toggleMsgItem() {
        this.uvuceno = !this.uvuceno;
    }
}

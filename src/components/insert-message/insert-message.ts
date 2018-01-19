import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'insert-message',
    templateUrl: 'insert-message.html'
})
export class InsertMessageComponent {
    public messageCreateForm: FormGroup;

    @Output() messageSent: EventEmitter<string> = new EventEmitter<string>();

    constructor(private formBuilder: FormBuilder) {
        this.messageCreateForm = this.formBuilder.group({
            newMessage: ['', [Validators.required, Validators.minLength(1)]]
        });
    }

    messages = [];
    public logForm() {
        this.messageSent.emit(this.messageCreateForm.value.newMessage);
        this.messageCreateForm.reset();
    }
}

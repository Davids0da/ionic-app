import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VALID } from '@angular/forms/src/model';

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
    public logForm() {
        if (this.messageCreateForm.value.newMessage.length) {
            this.messageSent.emit(this.messageCreateForm.value.newMessage);
            this.messageCreateForm.reset();
        }
    }
    public insertText(char: string) {
        const lastCharacter = this.messageCreateForm.value.newMessage.slice(-1);
        const n = lastCharacter.match(/\n/g);
        if (lastCharacter !== ' ' && n === null && this.messageCreateForm.value.newMessage.length > 0) {
            char = ' ' + char;
        }
        const newMessageValue = this.messageCreateForm.value.newMessage + char;
        this.messageCreateForm.setValue({
            newMessage: newMessageValue
        });
    }
}

// prevent eneter key down

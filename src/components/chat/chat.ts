import { Component } from '@angular/core';

/**
 * Generated class for the ChatComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat',
  templateUrl: 'chat.html'
})
export class ChatComponent {

  text: string;

  constructor() {
    console.log('Hello ChatComponent Component');
    this.text = 'Hello World';
  }

}

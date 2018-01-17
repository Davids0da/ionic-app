import { Component } from '@angular/core';

/**
 * Generated class for the InsertMessageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'insert-message',
  templateUrl: 'insert-message.html'
})
export class InsertMessageComponent {

  text: string;

  constructor() {
    console.log('Hello InsertMessageComponent Component');
    this.text = 'Hello World';
  }

}

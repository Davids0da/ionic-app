import { Component, Input } from '@angular/core';
import { ModalController, NavParams } from 'ionic-angular';
import { ListPage } from '../../pages/list/list';

@Component({
    selector: 'message-item',
    templateUrl: 'message-item.html'
})
export class MessageItemComponent {
    @Input() message: string;
    @Input() poruka: string;
    public uvuceno: boolean = false;

    constructor(public modalCtrl: ModalController) {}

    public list() {
        const profileModal = this.modalCtrl.create(ListPage);
        profileModal.present();
        console.log('ahah');
    }

    public toggleMsgItem() {
        this.uvuceno = !this.uvuceno;
    }
}

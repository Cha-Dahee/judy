import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  messageArray: Array<any> = [];
  sendImgPath: any;
  receiveImgPath: any;
  public messageForm: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.messageArray = [
      {counselor: true, user: 'David', message: "Hi, I'm David! I work at the Larkin non-profit. How's your day going?"},
      {counselor: false, user: 'Anonymous Platypus', message: "Hi."},
    ];
    this.sendImgPath = '/assets/imgs/chatmessagereceive.svg';
    this.receiveImgPath = '/assets/imgs/chatmessagesend.svg';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
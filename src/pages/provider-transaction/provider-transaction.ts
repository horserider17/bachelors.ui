import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProviderTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-provider-transaction',
  templateUrl: 'provider-transaction.html',
})
export class ProviderTransactionPage {
public transactionDetails: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.transactionDetails = navParams.get('transactionDetails');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProviderTransactionPage');
  }
}

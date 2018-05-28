import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProviderTransactionPage } from '../provider-transaction/provider-transaction';
import { AddItemsPage } from '../add-items/add-items';
import { GroupByPipe } from '../../shared/pipes/GroupByPipe';
import { BalanceSheetProvider } from '../../providers/balance-sheet/balance-sheet';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-balance-sheet-details',
  templateUrl: 'balance-sheet-details.html',
})
export class BalanceSheetDetailsPage {
  public providerGroupId: number;
  public providerId: number;
  public grupBlnceId: number;
  public individualExpenditure: any;
  public totalAmount: number;
  public remainingAmount: number;
  public expenditureList: any;

  public userData: any[] = [{ "providerGroupId": "" }, { "providerId": "" }, { "grupBlnceId": "" }];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public blncSheetProvider: BalanceSheetProvider,
    public alertCtrl: AlertController) {
    this.providerGroupId = navParams.get('providerGrupId');
    this.providerId = navParams.get('providerId');
    this.grupBlnceId = navParams.get('grupblncId');

    this.userData['providerGroupId'] = this.providerGroupId;
    this.userData['providerId'] = this.providerId;
    this.userData['grupBlnceId'] = this.grupBlnceId;

    this.GetIndividualExpenditure();
  }

GetIndividualExpenditure()
{
  this.blncSheetProvider.GetIndividualExpenditure(this.userData).subscribe(data => {
    this.individualExpenditure = data;
    this.totalAmount = this.individualExpenditure.TotalAmount;
    this.remainingAmount = this.individualExpenditure.RemainingAmount;
    this.expenditureList = this.individualExpenditure.ExpenditureEntityList;
  })
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BalanceSheetDetailsPage');
  }
  goToProviderDetails(transactionDetails: any) {
    this.navCtrl.push(ProviderTransactionPage, { transactionDetails });
  }
  goToAddItem() {
    let userData = this.userData;
    this.navCtrl.push(AddItemsPage, { userData });
  }

  goToAddItemPopUp()
  {
    let alert = this.alertCtrl.create({
      title: 'Product Details',
      subTitle: 'Enter an item purchased...',
      inputs: [
          {
              name: 'itemName',
              placeholder: 'Product Description'
          },
          {
              name: 'itemCost',
              placeholder: 'Cost',
              type: 'number'
          }
      ],
      buttons: [{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
              console.log('Cancel clicked');
          }
      },
      {
          text: 'Save',
          handler: data => {
            this.blncSheetProvider.AddItem(data,this.userData).subscribe(res => {
              this.GetIndividualExpenditure();
            });
          }
      }]
  });
  alert.present();
  }
}

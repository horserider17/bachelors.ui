import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';

import { BalanceSheetDetailsPage } from '../balance-sheet-details/balance-sheet-details';
import { AddMemberPage } from '../add-member/add-member';
import { CreateBalanceSheetPage } from '../create-balance-sheet/create-balance-sheet';
import { BalanceSheetProvider } from '../../providers/balance-sheet/balance-sheet';
import { AlertController } from 'ionic-angular';
import { CreateBalanceSheetPopUp } from '../PopUps/CreateBalanceSheetPopUp';

@IonicPage()
@Component({
  selector: 'page-balance-sheet',
  templateUrl: 'balance-sheet.html',
  providers: [BalanceSheetProvider]
})
export class BalanceSheetPage {
  public balanceSheetDetails: any;
  public providerGroupId: number;
  public providerId: number;
  public grupBlnceId: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public blncSheetProvider: BalanceSheetProvider,
    public alertCtrl: AlertController,
    public createBlncSheetPop: CreateBalanceSheetPopUp
  ) {

    this.providerGroupId = navParams.get('providerGroupId');
    this.providerId = navParams.get('providerId');
    this.GetBalanceSheet();
  }

  GetBalanceSheet() {
    this.blncSheetProvider.GetBalanceSheet(this.providerGroupId).subscribe(data => {
      this.balanceSheetDetails = data;
      console.log('verify changes', this.balanceSheetDetails)
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BalanceSheetPage');
  }
  goToBalanceSheet(grupblncId: number) {
    let providerGrupId = this.providerGroupId;
    let providerId = this.providerId;
    this.navCtrl.push(BalanceSheetDetailsPage, { providerId, providerGrupId, grupblncId });
  }
  goToAddMembers() {
    let providerGroupId = this.providerGroupId;
    this.navCtrl.push(AddMemberPage, { providerGroupId });
  }
  createBalanceSheetPopUp() {
    let providerGrupId = this.providerGroupId;
    //this.navCtrl.push(CreateBalanceSheetPage,{providerGrupId});
    //let response = this.createBlncSheetPop.createBalanceSheetPopUp(this.providerGroupId);
    //  console.log('response', response);
    //   if(response)
    //   {
    //     this.GetBalanceSheet();
    //   }
  }

  goToCreateBalanceSheet() {
    let alert = this.alertCtrl.create({
      title: 'Expense Sheet',
      subTitle: 'Create your new expense sheet',
      message: '',
      inputs: [
        {
          name: 'sheetName',
          placeholder: 'expensesheet'
        },
        {
          name: 'totalAmount',
          placeholder: 'amount',
          type: 'number'
        }
      ],
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Save',
        handler: data => {
          if (data.sheetName == '' || data.totalAmount == '') {
            alert.setMessage('All fields are mandatory');
            return false;
          }
          else {
            this.blncSheetProvider.CreateBalanceSheet(data, this.providerGroupId).subscribe(res => {
              this.GetBalanceSheet();
            });
          }
        }
      }]
    });
    alert.present();
  }
}

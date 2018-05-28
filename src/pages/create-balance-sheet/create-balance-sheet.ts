import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, NgForm}  from '@angular/forms';
import { BalanceSheetProvider } from '../../providers/balance-sheet/balance-sheet'; 

/**
 * Generated class for the CreateBalanceSheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-balance-sheet',
  templateUrl: 'create-balance-sheet.html',
  providers:[BalanceSheetProvider]
})
export class CreateBalanceSheetPage {
private createBalanceSheetForm: FormGroup;
public providerGroupId: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder:FormBuilder, public blncSheetProvider: BalanceSheetProvider) {
    this.providerGroupId = navParams.get('providerGrupId');
    this.createBalanceSheetForm = this.formBuilder.group({
      sheetName:[''],//Validators.required
      totalAmount:[''],
      providerGroupId:[this.providerGroupId]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateBalanceSheetPage');
  }

  createBalanceSheet(){
    console.log(this.createBalanceSheetForm.value);
    // this.blncSheetProvider.CreateBalanceSheet(this.createBalanceSheetForm.value).subscribe(res =>  {
    //  this.blncSheetProvider.GetBalanceSheet(this.providerGroupId);
    // })
  }
}

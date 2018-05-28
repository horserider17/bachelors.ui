import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, NgForm}  from '@angular/forms';
import { BalanceSheetProvider } from '../../providers/balance-sheet/balance-sheet';

/**
 * Generated class for the AddItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-items',
  templateUrl: 'add-items.html'
})
export class AddItemsPage {
  private addItemForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private formBuilder: FormBuilder, public blncSheetProvider: BalanceSheetProvider) {
    let testdata = navParams.get('userData');

    this.addItemForm = this.formBuilder.group({
      itemName:[''],//Validators.required
      itemCost:[''],
      providerId:[testdata.providerId],
      providerGroupId:[testdata.providerGroupId],
      grpBlncId:[testdata.grupBlnceId]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemsPage');
  }
  addItem(){
 console.log(this.addItemForm.value);
//  this.blncSheetProvider.AddItem(this.addItemForm.value).subscribe(res => {

//  });
  }
}

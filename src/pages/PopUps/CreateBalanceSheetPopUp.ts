import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import {Injectable} from '@angular/core';
import { BalanceSheetProvider } from '../../providers/balance-sheet/balance-sheet'; 

@Injectable()
export class CreateBalanceSheetPopUp {
    constructor(public alertCtrl: AlertController,public blncSheetProvider: BalanceSheetProvider) {

    }

    createBalanceSheetPopUp(providerGroupId: number) {
        let alert = this.alertCtrl.create({
            title: 'Expense Sheet',
            subTitle: 'Create your new expense sheet',
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
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            },
            {
                text: 'Save',
                handler: data => {
                    this.blncSheetProvider.CreateBalanceSheet(data, providerGroupId).subscribe(res =>{
                        return true;
                    })
                    console.log(data.name);
                    console.log(data.amount);
                }
            }]
        });
        alert.present();
    }
}
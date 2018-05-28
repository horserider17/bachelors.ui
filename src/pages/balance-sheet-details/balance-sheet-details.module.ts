import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BalanceSheetDetailsPage } from './balance-sheet-details';

@NgModule({
  declarations: [
    BalanceSheetDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BalanceSheetDetailsPage),
  ],
})
export class BalanceSheetDetailsPageModule {}

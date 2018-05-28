import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateBalanceSheetPage } from './create-balance-sheet';

@NgModule({
  declarations: [
    CreateBalanceSheetPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateBalanceSheetPage),
  ],
})
export class CreateBalanceSheetPageModule {}

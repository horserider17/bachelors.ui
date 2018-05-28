import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProviderTransactionPage } from './provider-transaction';

@NgModule({
  declarations: [
    ProviderTransactionPage,
  ],
  imports: [
    IonicPageModule.forChild(ProviderTransactionPage),
  ],
})
export class ProviderTransactionPageModule {}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GooglePlus } from '@ionic-native/google-plus';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserRegistrationPage } from '../pages/UserProfile/user-registration/user-registration';
import { GroupsPage } from '../pages/groups/groups';
import { UserprofileProvider } from '../providers/userprofile/userprofile';
import { AddMemberPage } from '../pages/add-member/add-member';
import { BalanceSheetPage } from '../pages/balance-sheet/balance-sheet';
import { ProviderTransactionPage }  from '../pages/provider-transaction/provider-transaction';
import { BalanceSheetDetailsPage } from '../pages/balance-sheet-details/balance-sheet-details';
import { CreateBalanceSheetPage } from '../pages/create-balance-sheet/create-balance-sheet';
import { GroupsProvider } from '../providers/groups/groups';
import { HttpClientModule } from '@angular/common/http';
import { BalanceSheetProvider } from '../providers/balance-sheet/balance-sheet'; 
import { AddItemsPage } from '../pages/add-items/add-items'; 
import { GroupByPipe } from '../shared/pipes/GroupByPipe';
import { CreateBalanceSheetPopUp } from '../pages/PopUps/CreateBalanceSheetPopUp';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GroupsPage,
    UserRegistrationPage,
    AddMemberPage,
    BalanceSheetPage,
    ProviderTransactionPage,
    BalanceSheetDetailsPage,
    CreateBalanceSheetPage,
    AddItemsPage,
    GroupByPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GroupsPage,
    HomePage,
    UserRegistrationPage,
    AddMemberPage,
    BalanceSheetPage,
    ProviderTransactionPage,
    BalanceSheetDetailsPage,
    CreateBalanceSheetPage,
    AddItemsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserprofileProvider,
    GroupsProvider,
    BalanceSheetProvider,
    CreateBalanceSheetPopUp,
    GooglePlus
  ]
})
export class AppModule {}

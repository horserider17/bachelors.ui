import { Component, ViewChild } from '@angular/core';
import { Platform, NavController,MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AddMemberPage } from '../../pages/add-member/add-member';
import { BalanceSheetPage } from '../../pages/balance-sheet/balance-sheet';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
@ViewChild(Nav) nav: Nav;

rootPage = BalanceSheetPage;
pages:Array<{title:string, component: any}>;

constructor(
public menu: MenuController,
public platform: Platform,
public statusBar: StatusBar,
public splashScreen: SplashScreen
) {
this.initializeApp();
this.pages = [
  {title:'Balance Sheet',component:BalanceSheetPage},
    {title:'Add Member',component:AddMemberPage}
  ];
}

openPage(page){
  this.menu.close();
  this.nav.setRoot(page.component);
}

initializeApp() {
  this.platform.ready().then(() => {
    // Okay, so the platform is ready and our plugins are available.
    // Here you can do any higher level native things you might need.
    this.statusBar.styleDefault();
    this.splashScreen.hide();
  });
}
}

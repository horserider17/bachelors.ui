import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { BalanceSheetPage } from '../balance-sheet/balance-sheet';
import { HomePage } from '../home/home';
import { GroupsProvider } from '../../providers/groups/groups';

@IonicPage()
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html',
  providers: [GroupsProvider]
})
export class GroupsPage {
  public data: any[];
  public groups: any[];
  public providerId : any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
     public groupsProvider: GroupsProvider,
     public alertCtrl: AlertController) {
      this.providerId = navParams.get('userData');
      this.GetGroups();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupsPage');
  }

  GetGroups()
  {
    this.groupsProvider.GetGroups(this.providerId).subscribe(grupData => {
      this.groups = grupData
    });
  }
  goToBalanceSheetView(providerGroupId: number) {
    console.log('nav to blnc sheet');
    let providerId = this.providerId;
    this.navCtrl.push(BalanceSheetPage,{providerGroupId,providerId});
  }
  goToCreateGroupPopUp()
  {
    let alert = this.alertCtrl.create({
      title: 'Group Details',
      subTitle: 'Enter group name...',
      inputs: [
          {
              name: 'groupName',
              placeholder: 'Group Name'
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
            console.log('this.providerId', this.providerId)
            this.groupsProvider.CreateGroup(data,this.providerId).subscribe(res => {
              this.GetGroups();
            });
          }
      }]
  });
  alert.present();
  }
}

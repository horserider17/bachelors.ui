import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { UserprofileProvider } from '../../../providers/userprofile/userprofile';
import { GroupsPage } from '../../groups/groups';

@IonicPage()
@Component({
  selector: 'page-user-registration',
  templateUrl: 'user-registration.html',
})
export class UserRegistrationPage {
userInfo: any={};
isUserLoggedIn:any = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userprofileProvider: UserprofileProvider,
    public googlePlus:GooglePlus 
  ) {}

  ionViewDidLoad() {
  }

  loginWithGooglePlus(){
    this.googlePlus.login({}).then(res=>{
      this.userInfo=res;
      this.isUserLoggedIn=true;

      this.userprofileProvider.RegisterUser(this.userInfo).subscribe(userData => {
        this.navCtrl.setRoot(GroupsPage,{userData});
      })
      }).catch( err => console.log(err));
   }

   logout(){
    this.googlePlus.logout().then( ()=>{
      this.isUserLoggedIn=false;
    });
   }
}

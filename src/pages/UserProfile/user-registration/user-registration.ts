import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, NgForm}  from '@angular/forms';
import { GooglePlus } from '@ionic-native/google-plus';
import { UserprofileProvider } from '../../../providers/userprofile/userprofile';
import { GroupsPage } from '../../groups/groups';

@IonicPage()
@Component({
  selector: 'page-user-registration',
  templateUrl: 'user-registration.html',
})
export class UserRegistrationPage {
private registerForm: FormGroup;
userInfo: any={};
isUserLoggedIn:any = false;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      private formBuilder: FormBuilder,
      public gp:GooglePlus,
  public userprofileProvider: UserprofileProvider ) {
    
    //   this.registerForm = this.formBuilder.group({
    //   firstName:[''],//Validators.required
    //   lastName:[''],
    //   mobile:['']
    // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserRegistrationPage');
  }
  logForm()
  {
    console.log(this.registerForm.value);
    this.navCtrl.push(GroupsPage);
  }

  loginWithGP(){
    console.log('test to check in simulator')
    this.gp.login({}).then(res=>{
      this.userInfo=res;
      this.isUserLoggedIn=true;
      console.log('response from g+', res);
      this.userprofileProvider.RegisterUseer(this.userInfo).subscribe(userData => {
        console.log('success fully registered', userData);
        this.navCtrl.push(GroupsPage,{userData});
      })
      }).catch( err => console.log(err));
   }

   logout(){
    this.gp.logout().then( ()=>{
      console.log('from logout');
      this.isUserLoggedIn=false;
    });
   }
}

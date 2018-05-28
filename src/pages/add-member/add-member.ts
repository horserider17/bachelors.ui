import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, NgForm}  from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { UserprofileProvider } from '../../providers/userprofile/userprofile';
import { GroupsProvider } from '../../providers/groups/groups';

/**
 * Generated class for the AddMemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-member',
  templateUrl: 'add-member.html',
})
export class AddMemberPage {
  private searchUserForm: FormGroup;
  private providerGroupId: any;
  private searchUserDetails: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
     private formBuilder: FormBuilder,
    public userprofileProvider: UserprofileProvider,
    public groupsProvider: GroupsProvider,
    private toastCtrl: ToastController  
  ) {
    this.providerGroupId = navParams.get('providerGroupId');
    this.searchUserForm = this.formBuilder.group({
      email:['', Validators.required],
      providerGroupId:[this.providerGroupId],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMemberPage');
  }

  searchUser(){
    this.userprofileProvider.SearchUsers(this.searchUserForm.value).subscribe(data => {
       this.searchUserDetails = data;
    })
    console.log('add member details', this.searchUserForm.value)
  }

  search(searchEvent){
    console.log(searchEvent.target.value);
    let term = searchEvent.target.value
    this.userprofileProvider.SearchUsers(searchEvent.target.value).subscribe(data => {
      this.searchUserDetails = data;
      console.log('this.searchUserDetails',this.searchUserDetails);
   })
  }

  addMember(searchUserDetails: any){
     this.groupsProvider.AddMembersToGroup(searchUserDetails,this.providerGroupId).subscribe(res =>{
      this.searchUserDetails = null;
      this.presentToast();
     })
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'User added successfully',
      duration: 3000,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
}

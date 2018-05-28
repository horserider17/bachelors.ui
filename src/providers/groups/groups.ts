import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs';

/*
  Generated class for the GroupsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroupsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GroupsProvider Provider');
  }

  public GetGroups(providerId: any) {
    let paramrters = new HttpParams();
    paramrters = paramrters.append('providerId', providerId);
    return this.http.get<any>('http://192.168.0.25/BachelorAPI/api/CreateGroup/GetGroup',{params:paramrters} )
                    .map(res => res.Data)
  }

  public CreateGroup(groupName: any, providerId:any){
    let paramrters = new HttpParams();
    paramrters = paramrters.append('providerId', providerId);
    paramrters = paramrters.append('groupName', groupName.groupName);
    return this.http.post<any>('http://192.168.0.25/BachelorAPI/api/CreateGroup/CreateGroup', '',{params:paramrters})
                    .map(res => res.Data)
  }

  public AddMembersToGroup(userData:any,providerGroupid: any){
    let paramrters = new HttpParams();
    paramrters = paramrters.append('memberProviderId', userData.providerId);
    paramrters = paramrters.append('adminGroupId', providerGroupid);
    return this.http.post<any>('http://192.168.0.25/BachelorAPI/api/CreateGroup/AddMember', '',{params:paramrters})
                    .map(res => res.Data)
  }
}

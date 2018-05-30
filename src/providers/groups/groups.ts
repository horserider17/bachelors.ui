import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs';
import { API_BASE_URL, API, CREATEGROUP, GETGROUP, ADDMEMBER, GETMEMBERS } from '../../shared/constants/web.api.constants';

@Injectable()
export class GroupsProvider {

  constructor(public http: HttpClient) {
  }

  public GetGroups(providerId: any) {
    let paramrters = new HttpParams();
    paramrters = paramrters.append('providerId', providerId);
    return this.http.get<any>(API_BASE_URL + API + CREATEGROUP + GETGROUP, { params: paramrters })
      .map(res => res.Data)
  }

  public CreateGroup(groupName: any, providerId: any) {
    let paramrters = new HttpParams();
    paramrters = paramrters.append('providerId', providerId);
    paramrters = paramrters.append('groupName', groupName.groupName);
    return this.http.post<any>(API_BASE_URL + API + CREATEGROUP + CREATEGROUP, '', { params: paramrters })
      .map(res => res.Data)
  }

  public AddMembersToGroup(userData: any, providerGroupid: any) {
    let paramrters = new HttpParams();
    paramrters = paramrters.append('memberProviderId', userData.providerId);
    paramrters = paramrters.append('adminGroupId', providerGroupid);
    return this.http.post<any>(API_BASE_URL + API + CREATEGROUP + ADDMEMBER, '', { params: paramrters })
      .map(res => res.Data)
  }
}

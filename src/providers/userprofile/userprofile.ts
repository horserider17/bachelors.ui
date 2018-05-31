import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL, API, USERPROFILE, GETUSERPROFILE, SEARCHUSERS, REGISTERUSER }
        from '../../shared/constants/web.api.constants';

@Injectable()
export class UserprofileProvider {

  constructor(public http: HttpClient) {
  }

  public RegisterUser(userDetails: any) {
    let params =
    {
      "FirstName": userDetails.familyName,
      "LastName": userDetails.givenName,
      "Email": userDetails.email,
      "UserId": userDetails.userId, //"117456490412538276901"
      "ImageUrl": userDetails.imageUrl
    }

    return this.http.post<any>(API_BASE_URL + API + USERPROFILE + REGISTERUSER, params)
      .map(res => res.Data)
  }

  public SearchUsers(userDetails: any) {
    let paramrters = new HttpParams();
    paramrters = paramrters.append('email', userDetails);
    
    return this.http.get<any>(API_BASE_URL + API + USERPROFILE + SEARCHUSERS, { params: paramrters })
      .map(res => res.Data)
  }
}

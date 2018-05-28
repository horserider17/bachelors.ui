import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserprofileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserprofileProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserprofileProvider Provider');
  }

  public RegisterUseer(userDetails: any) {
    let params = 
    {
      "FirstName": userDetails.familyName,
      "LastName": userDetails.givenName,
      "Email": userDetails.email,
      "UserId":   userDetails.userId, //"117456490412538276901"
      "ImageUrl": userDetails.imageUrl
    }

    return this.http.post<any>('http://192.168.0.25/BachelorAPI/api/UserProfile/RegisterUser',params)
                    .map(res => res.Data)
  }

  public SearchUsers(userDetails: any){
    let paramrters = new HttpParams();
    paramrters = paramrters.append('email', userDetails);
    return this.http.get<any>('http://192.168.0.25/BachelorAPI/api/UserProfile/SearchUsers',{params:paramrters})
                    .map(res => res.Data)
  }
}

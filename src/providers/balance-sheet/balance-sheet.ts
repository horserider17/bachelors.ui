import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the BalanceSheetProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BalanceSheetProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BalanceSheetProvider Provider');
  }

  public GetBalanceSheet(id: any):Observable<any>  {
    let params = new HttpParams().set('providerGroupId', id);
    return this.http
      .get<any>('http://192.168.0.25/BachelorAPI/api/Transactions/GetBalanceSheet', { params: params })
      .map(res => res.Data)
  }

  public CreateBalanceSheet(data: any, providerGroupId: any) {
    let paramrters = new HttpParams();
    paramrters = paramrters.append('balanceSheetName', data.sheetName);
    paramrters = paramrters.append('totalAmount', data.totalAmount);
    paramrters = paramrters.append('providerGroupId', providerGroupId);

    return this.http
      .post<any>('http://192.168.0.25/BachelorAPI/api/Transactions/CreateBalanceSheet','', { params: paramrters })
      .map(res => res.Data)
  }

  public AddItem(data:any, userData: any){
    let paramrters = new HttpParams();
    paramrters = paramrters.append('itemName', data.itemName);
    paramrters = paramrters.append('cost', data.itemCost);
    paramrters = paramrters.append('providerId', userData.providerId);
    paramrters = paramrters.append('providerGroupId', userData.providerGroupId);
    paramrters = paramrters.append('grpBlncId', userData.grupBlnceId);

    return this.http
      .post<any>('http://192.168.0.25/BachelorAPI/api/Transactions/CreateItem','', { params: paramrters })
      .map(res => res.Data)
  }

  public GetIndividualExpenditure(data: any){
    let paramrters = new HttpParams();
    paramrters = paramrters.append('providerGroupId', data.providerGroupId);
    paramrters = paramrters.append('grpBlncId', data.grupBlnceId);

    return this.http
      .get<any>('http://192.168.0.25/BachelorAPI/api/Transactions/GetIndividualExpenditure',{ params: paramrters })
      .map(res => res.Data)
  }
}

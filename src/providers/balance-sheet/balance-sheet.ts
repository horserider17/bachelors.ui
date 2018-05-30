import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import {
  API_BASE_URL, API, TRANSACTIONS, CREATEBALANCESHEET, CREATEITEM,
  GETEXPENDITURE, GETINDIVIDUALEXPENDITURE, GETBALANCESHEET
}
  from '../../shared/constants/web.api.constants';

@Injectable()
export class BalanceSheetProvider {

  constructor(public http: HttpClient) {
  }

  public GetBalanceSheet(id: any): Observable<any> {
    let params = new HttpParams().set('providerGroupId', id);
    return this.http
      .get<any>(API_BASE_URL + API + TRANSACTIONS + GETBALANCESHEET, { params: params })
      .map(res => res.Data)
  }

  public CreateBalanceSheet(data: any, providerGroupId: any) {
    let paramrters = new HttpParams();
    paramrters = paramrters.append('balanceSheetName', data.sheetName);
    paramrters = paramrters.append('totalAmount', data.totalAmount);
    paramrters = paramrters.append('providerGroupId', providerGroupId);

    return this.http
      .post<any>(API_BASE_URL + API + TRANSACTIONS + CREATEBALANCESHEET, '', { params: paramrters })
      .map(res => res.Data)
  }

  public AddItem(data: any, userData: any) {
    let paramrters = new HttpParams();
    paramrters = paramrters.append('itemName', data.itemName);
    paramrters = paramrters.append('cost', data.itemCost);
    paramrters = paramrters.append('providerId', userData.providerId);
    paramrters = paramrters.append('providerGroupId', userData.providerGroupId);
    paramrters = paramrters.append('grpBlncId', userData.grupBlnceId);

    return this.http
      .post<any>(API_BASE_URL + API + TRANSACTIONS + CREATEITEM, '', { params: paramrters })
      .map(res => res.Data)
  }

  public GetIndividualExpenditure(data: any) {
    let paramrters = new HttpParams();
    paramrters = paramrters.append('providerGroupId', data.providerGroupId);
    paramrters = paramrters.append('grpBlncId', data.grupBlnceId);

    return this.http
      .get<any>(API_BASE_URL + API + TRANSACTIONS + GETINDIVIDUALEXPENDITURE, { params: paramrters })
      .map(res => res.Data)
  }
}

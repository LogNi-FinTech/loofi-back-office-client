import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'app/shared/common/constants';
import { Observable } from 'rxjs';
const url: string = Constants.apiBase + "/api/v1/ledger";

@Injectable({
  providedIn: 'root'
})
export class LedgerService {

  // private baseurl = "http://localhost:8080/api";
  // private fetchMfsTransactionUrl = this.baseurl + "/mfs-ledger-transaction/maker";
  // private saveMfsTransaction = this.baseurl + "/mfs-ledger-transaction/maker";
  // private changeStatusMfsLedgerTransactionUrl = this.baseurl + "/mfs-ledger-transaction/checker/change-status";

  constructor(private http: HttpClient) { }

  fetchMfsLedger(): Observable<any> {
    return this.http.get(url);
  }

  create(ledgerObj: any): Observable<any> {
    return this.http.post(url, ledgerObj);
  }

  update(updateLedgerObj: any): Observable<any> {
    return this.http.put(url, updateLedgerObj);
  }
}

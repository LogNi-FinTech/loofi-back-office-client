import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Constants } from "app/shared/common/constants";
import { Observable } from "rxjs";


//const url = 'http://localhost:8080/api/v1/ledger';
const url:string = Constants.apiBase+"/api/v1/ledger"
@Injectable({
    providedIn: 'root'
  })

  export class LedgerService {

    constructor(private http: HttpClient) { }


      getAll(): Observable<any> {
        return this.http.get(url);
      }
    
    
    create(ledgerObj: any): Observable<any> {
        return this.http.post(url, ledgerObj);
      }
    
      update(updateLedgerObj: any): Observable<any> {
        return this.http.put(url, updateLedgerObj);
      }

 }
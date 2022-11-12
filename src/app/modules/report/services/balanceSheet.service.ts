import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Constants } from "app/shared/common/constants";
//import { url } from "inspector";
import { Observable } from "rxjs";


const url:string = Constants.apiBase+"/api/v1/ledger/all/balance";

@Injectable({
    providedIn: 'root'
  })

  export class BalanceSheetService {

    constructor(private http: HttpClient) { }


      getAll(): Observable<any> {
        return this.http.get(url);
      }
    
    getBalanceAt(time:string): Observable<any> {
      if(time==null || time ==""){
        return this.http.get(url);
      }
      else {
        return this.http.get(url+"?time="+time+"T18:00:00.00Z")
      }
       
    }


 }
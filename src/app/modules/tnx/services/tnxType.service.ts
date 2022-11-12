


import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Constants } from "app/shared/common/constants";
import { Observable } from "rxjs";
//import { Ledger } from "../model/ledger";


@Injectable({
    providedIn: 'root'
  })
  export class TnxTypeService{

    constructor(private http : HttpClient) { }

    //private url = "http://localhost:8080/api/v1/txn/type";
     url:string = Constants.apiBase+"/api/v1/txn/type"

    getAll(): Observable<any> {
        return this.http.get(this.url);
    }

    create(tnxType:any): Observable<any> {
      return this.http.post(this.url, tnxType);
  }
    
    update(tnxType:any): Observable<any> {

        return this.http.put(this.url, tnxType );
    }


  }
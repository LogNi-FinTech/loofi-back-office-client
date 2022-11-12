import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'app/shared/common/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TnxService {

  constructor(private http : HttpClient) { }

    private url:string = Constants.apiBase+"/api/v1/txn/type/sub";

    fetchTnxFree(): Observable<any> {
        return this.http.get(this.url);
    }

    create(tnxFreeObj:any): Observable<any> {
      return this.http.post(this.url, tnxFreeObj);
  }
    
    update(UpdatetnxFreeObj:any): Observable<any> {
        return this.http.put(this.url, UpdatetnxFreeObj);
    }
}

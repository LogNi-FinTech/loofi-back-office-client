import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistratioService {

  private baseurl = "http://localhost:8080/api";
  private fetchRegistrationUrl = this.baseurl + "/registration";
  private saveRegistrationUrl = this.baseurl + "/registration";
  private changeStatusRegistrationUrl = this.baseurl + "/registration/update/status";

  constructor(private _httpClient: HttpClient) { }

  fetchRegistrationList():Observable<any[]>{
    return this._httpClient.get<any[]>(this.fetchRegistrationUrl, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', }),
    });
  }

  saveRegistration(transaction){
    return this._httpClient.post(this.saveRegistrationUrl, transaction);
  }

  changeStatusRegistration(transaction){
    return this._httpClient.post(this.changeStatusRegistrationUrl, transaction);
  }
}

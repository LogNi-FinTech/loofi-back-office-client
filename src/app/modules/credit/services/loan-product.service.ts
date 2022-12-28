import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { creditServiceBaseUrl } from 'app/shared/constant/baseUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanProductService {

  private fetchLoanProductUrl = creditServiceBaseUrl + "api/product";
  private saveLoanProductUrl =  creditServiceBaseUrl + "api/product";
  private deleteLoanProductUrl =  creditServiceBaseUrl + "api/product/";

  constructor(private _httpClient: HttpClient) { }

  fetchLoanProductList():Observable<any[]>{
    return this._httpClient.get<any[]>(this.fetchLoanProductUrl, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', }),
    });
  }

  saveLoanProduct(loanProduct){
    return this._httpClient.post(this.saveLoanProductUrl, loanProduct);
  }

  deleteLoanProduct(loanProductId){
    return this._httpClient.delete(this.deleteLoanProductUrl+loanProductId, {responseType: 'text'});
  }

  // changeStatusLoanProduct(transaction){
  //   return this._httpClient.post(this.changeStatusLoanProductUrl, transaction);
  // }
}

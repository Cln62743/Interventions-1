import { Injectable } from '@angular/core';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ITypeProbleme } from "./typeprobleme";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class TypeProblemeService {
  private baseUrl = 'https://interventionseb.azurewebsites.net/api/intervention';

  constructor(private _http: HttpClient) { }

  obtenirTypesProbleme(): Observable<ITypeProbleme[]> {
    return this._http.get<ITypeProbleme[]>(this.baseUrl)
      //.map(Response)  // Plus nécessaire HttpClient car retourne automatique un type JSON
      .do(data => console.log('obtenirTypesProbleme: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote loggiing infrastructure
    // instead of just logging it to the console
    console.error(err.error);
    return Observable.throw(err.message);
  }

}
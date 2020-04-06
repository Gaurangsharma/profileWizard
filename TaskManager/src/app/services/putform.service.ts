import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from "@angular/common/http";
import { baseUrl } from "../shared/baseurl";
import { Form } from "../shared/form";

import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PutformService {

  constructor(private http:HttpClient) { }

  getForms():Observable<Form[]> {
    return this.http.get<Form[]>(baseUrl+'form');
  }

  putForm(form: Form): Observable<Form> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(form+ "Inside putformk");
    return this.http.post<Form>(baseUrl + 'form', form, httpOptions);
  }
}

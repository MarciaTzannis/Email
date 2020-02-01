import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  map } from 'rxjs/operators';
import { ResponseModel } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  api = 'http://localhost:3200/login';

  constructor(
    private httpClient: HttpClient
  ) { }

  logar(dadosLogin) {
    return this.httpClient.post(this.api, dadosLogin)
    .pipe(
      map((response: ResponseModel) => {
        localStorage.setItem('cmail-token', response.token);
        localStorage.setItem('user-info', JSON.stringify(response));
        return response
      })
    )
  }
}

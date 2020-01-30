import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Email } from '../models/email';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  api = 'http://localhost:3200/emails';
  cabecalho = new HttpHeaders(
    {'Authorization': localStorage.getItem('cmail-token')}
    );

  constructor(
    private httpClient: HttpClient
  ) { }

  enviar({destinatario, assunto, conteudo}) {
    const emailParaApi = {
      to: destinatario,
      subject: assunto,
      content: conteudo
    }
    return this.httpClient
      .post(
        this.api,
        emailParaApi,
        {headers: this.cabecalho}
      )
  }

  listar() {
    return this.httpClient
      .get(this.api, {headers: this.cabecalho})
      .pipe<Email[]>(
        map(
          (response: any[]) => {
            return response.map(
              emailApi => new Email({
                destinatario: emailApi.to,
                assunto: emailApi.subject,
                conteudo: emailApi.content,
                dataDeEnvio: emailApi.created_at,
                id: emailApi.id
              })
            )
          }
        )
      )
  }

  deletar(id) {
    return this.httpClient
      .delete(`${this.api}/${id}`, {headers: this.cabecalho})
  }



}

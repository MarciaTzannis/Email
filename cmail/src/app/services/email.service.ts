import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  api = 'http://localhost:3200/emails';
  cabecalho = new HttpHeaders(
    {'Authorization': localStorage.getItem('cmail-token')}
    );

  constructor(
    private hhtpCliente: HttpClient
  ) { }

  enviar({destinatario, assunto, conteudo}) {
    const emailParaApi = {
      to: destinatario,
      subject: assunto,
      content: conteudo
    }
    return this.hhtpCliente
      .post(
        this.api,
        emailParaApi,
        {headers: this.cabecalho}
      )
  }

}

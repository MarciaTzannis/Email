import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css']
})
export class CaixaDeEntradaComponent {
  
  private _isNewEmailOpen = false;

  emailList = [];

  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  };

  get isNewEmailOpen() {
    return this._isNewEmailOpen;
  }

  toogleEmail() {
    this._isNewEmailOpen = !this._isNewEmailOpen;
  }
      // setValue(event, key) {
      //   const value = event.target.value;
      //   this.email[key] = value;
      //   console.log(this.email);
      // }


  // handleEmail(event: Event) {
  //   event.preventDefault();
  //   this.emailList.push(this.email);
  //   console.log(this.emailList);
  //   this.email = {
  //     destinatario: '',
  //     assunto: '',
  //     conteudo: ''
  //   };
  //   this.toogleEmail
  // }

  handleEmail(form: NgForm) {
    console.log(form);
    if(form.invalid) return;

    console.log(this.email)

    this.emailList.push(this.email);
    this.email = {
          destinatario: '',
          assunto: '',
          conteudo: ''
        };

    form.reset();  
    this.toogleEmail();
  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { PageService } from 'src/app/services/page.service';
import { HeaderService } from 'src/app/services/header.service';

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

  termoParaFiltro = '';

  constructor(
    private emailService: EmailService,
    private pageServive: PageService,
    private headerService: HeaderService
  ) {}

  get isNewEmailOpen() {
    return this._isNewEmailOpen;
  }

  toogleEmail() {
    this._isNewEmailOpen = !this._isNewEmailOpen;
  }

  ngOnInit() {
    this.emailService
      .listar()
      .subscribe(lista => {
        this.emailList = lista;
      })
      this.pageServive.defineTitulo('Caixa de entrada - Cmail');
      this.headerService.valorDoFiltro.subscribe(novoValor => this.termoParaFiltro = novoValor);
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

    if(form.invalid) return;

    this.emailService.enviar(this.email)
      .subscribe(
        (respomse) => {
          this.emailList.push(this.email);
          this.email = {
                destinatario: '',
                assunto: '',
                conteudo: ''
              };

          form.reset();  
          this.toogleEmail();
        }),
        (error) => console.log(error)

  }

  handleRemoveEmail(event: string, id: string) {
    this.emailService.deletar(id)
      .subscribe(
        (res) => {
          this.emailList = this.emailList.filter
          (email => email.id != id);
        },
        (erro) => console.log(erro)
      )
  }

  filtrarEmail() {
    const termoParaFiltroMinusculo = this.termoParaFiltro.toLowerCase();

    return this.emailList.filter(email =>
      {
        const assunto = 
        email.assunto.toLowerCase();
        return assunto.includes
        (termoParaFiltroMinusculo)
      })
  }

}

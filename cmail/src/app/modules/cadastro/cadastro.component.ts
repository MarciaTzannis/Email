import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { PageService } from 'src/app/services/page.service';


@Component({
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  mensagemErro = "";

  formCadastro = new FormGroup({
    nome: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
    username: new FormControl('', [ Validators.required ]),
    senha: new FormControl('', [ Validators.required ]),
    telefone: new FormControl('', [ Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4,5}') ]),
    avatar: new FormControl('', [ Validators.required ], this.validaImagem.bind(this) )
  })

  constructor(
    private httpClient: HttpClient,
    private roteador: Router,
    private pageService: PageService
  ) { }

  ngOnInit() {
    this.pageService.defineTitulo('Cadastro - Cmail');
  }

  validaImagem(campoDoFormulario: FormControl) {
    return this.httpClient
      .head(campoDoFormulario.value, {
        observe: 'response'
      })
      .pipe(
        map((response: HttpResponseBase) => {
          return response.ok ? null : { urlInvalida: true }
        }),
        catchError((error) => {
          return [{ urlInvalida: true }]
        })
      )
  }

  validarTodosOsCamposDoFormulario() {
    const camposForm = this.formCadastro.controls;
    // this.formCadastro.markAllAsTouched(); 
    Object.keys(camposForm).forEach(field => {
      const control = this.formCadastro.get(field);
      console.log(field);
      control.markAsTouched({ onlySelf: true });
    })
  }
 
  handleCadastroUsuario() {
    if(this.formCadastro.valid) {
      const userData = new User
      (this.formCadastro.value);
      console.log(userData);

      this.httpClient
        .post('http://localhost:3200/users', userData)
        .subscribe (
          (resp) => {
            console.log(resp);
            this.formCadastro.reset();

            setTimeout(() => {
              this.roteador.navigate(['']);
            }, 1000)
          },
          (responseError: HttpErrorResponse) => {
            this.mensagemErro = responseError.error.body;
          }
        )

    } else {
      this.validarTodosOsCamposDoFormulario();
    }
  }

}

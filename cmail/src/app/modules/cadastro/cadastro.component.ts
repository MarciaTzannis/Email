import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(6) ]),
    username: new FormControl('', [ Validators.required, Validators.minLength(6) ]),
    senha: new FormControl('', [ Validators.required, Validators.pattern('[a-z]*') ]),
    avatar: new FormControl('')
  })

  constructor() { }

  ngOnInit() {
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
      this.formCadastro.reset();
    } else {
      this.validarTodosOsCamposDoFormulario();
    }
  }

}

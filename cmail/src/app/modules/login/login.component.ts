import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    password: ''
  }
  mensagemErro: any;

  constructor(
    private loginService: LoginService,
    private roteador: Router
    ) { }

  ngOnInit() {
  }

  handleLogin (formLogin: NgForm) {
    
    if (formLogin.valid) {

      this.loginService.logar(this.login)
        .subscribe(
          (response: any) => {
            // console.log(response);
            localStorage.setItem('cmail-token', response.token);
            this.roteador.navigate(['/inbox']);
          },
        (responseError: HttpErrorResponse) => {
          console.log(responseError);
          this.mensagemErro = responseError.error.message;
        }
      )
    } else {
      formLogin.form.markAllAsTouched();
    }
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const rotas: Routes = [
  {
    path: 'cadastro',
    loadChildren: () =>
      import('./modules/cadastro/cadastro.module')
      .then(m => m.CadastroModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module')
      .then(m => m.LoginModule)
  },
  {
    path: 'inbox',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/caixa-de-entrada/caixa-de-entrada.module')
      .then(m => m.CaixaDeEntradaModule)
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(rotas)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule { }

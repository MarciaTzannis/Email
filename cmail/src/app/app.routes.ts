import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from "./modules/cadastro/cadastro.component";
import { LoginComponent } from './login/login.component';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';

const rotas: Routes = [
    { path: '', component: LoginComponent },
    { path: 'inbox', component: CaixaDeEntradaComponent},
    { path: 'cadastro', component: CadastroComponent }
]

export const ModuleRoteamento = RouterModule.forRoot(rotas);
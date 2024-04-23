import { Routes } from '@angular/router';
import { PaginaSecundariaComponent } from './pagina-secundaria/pagina-secundaria.component';
import { FonoaudiologoComponent } from './fonoaudiologo/fonoaudiologo.component';
import { PacienteComponent } from './paciente/paciente.component';
import { ControleComponent } from './controle/controle.component';
import { CadastrarPacienteComponent } from './cadastrar-paciente/cadastrar-paciente.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'fonoaudiologo', component: FonoaudiologoComponent },
    { path: 'paciente', component: PacienteComponent },
    { path: 'controle', component: ControleComponent },
    { path: 'cadastro-paciente', component: CadastrarPacienteComponent },
    { path: '', component: CadastrarPacienteComponent },
];

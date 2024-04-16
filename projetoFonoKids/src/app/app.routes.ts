import { Routes } from '@angular/router';
import { PaginaSecundariaComponent } from './pagina-secundaria/pagina-secundaria.component';
import { FonoaudiologoComponent } from './fonoaudiologo/fonoaudiologo.component';
import { PacienteComponent } from './paciente/paciente.component';
import { ControleComponent } from './controle/controle.component';

export const routes: Routes = [
    {path: 'teste', component: PaginaSecundariaComponent},
    { path: 'fonoaudiologo', component: FonoaudiologoComponent },
    { path: 'paciente', component: PacienteComponent },
    { path: 'controle', component: ControleComponent }
];
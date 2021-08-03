import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestasComponent } from './componentes/encuestas/encuestas.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { ComidasComponent } from './componentes/comidas/comidas.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { NbasicaComponent } from './componentes/nbasica/nbasica.component';
import { ErrorComponent } from './componentes/error/error.component';
import { SuplementosComponent } from './componentes/suplementos/suplementos.component';
import { RecetasComponent } from './componentes/recetas/recetas.component';
import { DietasComponent } from './componentes/dietas/dietas.component';




const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'encuestas', component: EncuestasComponent },
  { path: 'perfil/:idUsuario', component: PerfilComponent },
  { path: 'comidas', component: ComidasComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'nbasica', component: NbasicaComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'suplementos', component: SuplementosComponent },
  { path: 'recetas', component: RecetasComponent },
  { path: 'dietas', component: DietasComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ROUTES_USUARIO } from './components/usuario/usuario.routing';
const routes: Routes = [
  {
    path:'home', component : HomeComponent
  },
  {
    path:'', component : HomeComponent
  },

  //Usuario Routes
  {
    path: 'usuario/:id', component: UsuarioComponent, children : ROUTES_USUARIO
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Router } from "@angular/router";
import { AgregarComponent } from './agregar.component';
import { EditarComponent } from './editar.component';
import { EliminarComponent } from './eliminar.component';


export const ROUTES_USUARIO = [
  {
    path: 'agregar', component: AgregarComponent
  },
  {
    path: 'editar', component: EditarComponent
  },
  {
    path: 'eliminar', component: EliminarComponent
  },
  {
    path:'', component : EditarComponent
  }
]

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Example1Component } from './components/example1/example1.component';
import { CssComponent } from './components/css/css.component';
import { ClassComponent } from './components/class/class.component';
import { DirectivaComponent } from './components/directiva/directiva.component';
import { NavComponent } from './components/nav/nav.component';

import { HomeComponent } from './components/home/home.component';

//Usuario modules
import { UsuarioComponent } from './components/usuario/usuario.component';
import { EliminarComponent } from './components/usuario/eliminar.component';
import { AgregarComponent } from './components/usuario/agregar.component';
import { EditarComponent } from './components/usuario/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    Example1Component,
    CssComponent,
    ClassComponent,
    DirectivaComponent,
    NavComponent,
    UsuarioComponent,
    AgregarComponent,
    EditarComponent,
    EliminarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

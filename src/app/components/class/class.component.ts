import { Component } from '@angular/core';

@Component({
  selector: 'app-class',
  template: `
    <div  [ngClass]="{ 'alert-success': alerta, 'alert-danger': !alerta}" class="alert" role="alert">
      A simple primary alert—check it out!
    </div>

    <button [ngClass]="{ 'alert-success': alerta, 'alert-danger' : !alerta }"  class="btn" (click)="alerta = !alerta">
          Cambiar Alerta
    </button>
  `,
  styles: [
  ]
})
export class ClassComponent {
    alerta = true;
}

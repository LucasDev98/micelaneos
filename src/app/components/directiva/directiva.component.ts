import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  template: `
   <button class="btn btn-primary" (click)="save()" [disabled]="spinner">
       <i   [ngClass]="{ 'fa fa-sync fa-spin': spinner, 'fas fa-save': !spinner}"></i>  Guardar Cambios
   </button>
  `,
  styles: [

  ]
})
export class DirectivaComponent {
    spinner : boolean = false;
    save () {
        this.spinner = true;

        setTimeout( ()=> this.spinner = false, 3000 );
    }
}

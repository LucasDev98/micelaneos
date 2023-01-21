import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  template: `
    <p>
      editar works!
    </p>
  `,
  styles: [
  ]
})
export class EditarComponent {
    constructor ( private activateRoute : ActivatedRoute ) {

        this.activateRoute.parent?.params.subscribe( param => {
          console.log( param );
        })
    }
}

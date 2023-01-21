import { Component } from '@angular/core';

@Component({
  selector: 'app-example1',
  template:` <p [ngStyle]="{ 'font-size.px':tamano }">
              hola mundo
            </p>
            <button class="btn btn-primary mr-2">
              <i class="fa fa-plus" (click)="tamano = tamano + 10"></i>
            </button>
            <button class="btn btn-primary"  (click)="tamano = tamano - 10">
              <i class="fa fa-minus"></i>
            </button>
  `
})
export class Example1Component {
    tamano : number = 25;
}

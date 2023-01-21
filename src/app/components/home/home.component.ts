import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
     <h1>Micelaneos</h1>
    <hr>
    <app-example1></app-example1>
    <hr>
    <app-css></app-css>
    <hr>
    <app-class></app-class>
    <hr>
    <app-directiva></app-directiva>
  `,
  styles: [
  ]
})
export class HomeComponent {

}

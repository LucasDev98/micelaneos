import { Component } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>
  `,
  styles: [
    `p{
      color : red;
      font-size:36px;
    }`
  ]
})
export class CssComponent {

}

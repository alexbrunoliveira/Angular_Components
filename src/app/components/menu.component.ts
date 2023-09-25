import { Component } from '@angular/core';

@Component({
  selector: 'menu-component',
  template: `
    <div class="container">
      <h2>_Alex Oliveira_</h2>
    </div>
  `,
  styles: [
    `
    .container {
      display: flex;
      justify-content: center; /* Alinhamento horizontal no centro */
      align-items: center; /* Alinhamento vertical no centro */
      height: 40vh; /* Define a altura da tela  */
    }
    
    h2 {
      color: #03C4A1;
    }
  `,
  ],
})
export class MenuComponent {}

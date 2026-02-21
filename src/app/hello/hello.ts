import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {
  protected title = 'Bem vindo(a) ao Angular Moderno!';

  protected isDisabled = false;

  protected onClick() {
    this.isDisabled = !this.isDisabled;
  }
  protected onEnable() {
    console.log('Valor atual = ', this.isDisabled);
    this.isDisabled === true ? (this.isDisabled = false) : (this.isDisabled = true);

    // this.isDisabled = !this.isDisabled
  }
}

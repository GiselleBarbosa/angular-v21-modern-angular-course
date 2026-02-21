import { Component, signal } from '@angular/core';

enum ButtonState {
  enabled = 'Habilitado',
  disabled = 'Desabilitado',
}
@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {
  protected title = 'Bem vindo(a) ao Angular Moderno!';

  protected isDisabled = false;
  //signals
  protected counterSignal = signal(0);

  protected get btnLabel(): string {
    return this.isDisabled ? ButtonState.disabled : ButtonState.enabled;
  }

  protected toggleState(): void {
    this.isDisabled = !this.isDisabled;
  }

  protected increase() {
    this.counterSignal.update((current) => current + 1);
  }

  protected decrease() {
    this.counterSignal.update((current) => (current > 0 ? current - 1 : 0));
  }
}

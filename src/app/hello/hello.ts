import { Component, computed, effect, signal } from '@angular/core';

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

  protected count = signal(0);

  protected doubleCount = computed(() => this.count() * 2);

  protected readonly countLog = effect(() => console.warn('Count mudou: ', this.count()));

  /* protected getDoubleCount() {
    console.info('doubleCounter foi chamado..');
    return this.count() * 2;
  } */

  protected get btnLabel(): string {
    return this.isDisabled ? ButtonState.disabled : ButtonState.enabled;
  }

  protected toggleState(): void {
    this.isDisabled = !this.isDisabled;
  }

  protected increase() {
    this.count.update((current) => current + 1);
  }

  protected decrease() {
    this.count.update((current) => (current > 0 ? current - 1 : 0));
  }

  protected reset() {
    this.count.set(0);
  }
}

import { View } from './View';
import { DateHelper } from './../helpers/DateHelper';
import { Negociacao } from './../models/Negociacao';
import { Negociacoes } from './../models/Negociacoes';

export class MensagensView extends View<string> {
  private _timer: number;

  update(mensagem: string = ''): void {
    super.update(mensagem);
    if (mensagem)
      this._clearTimer();
  }

  protected _template(texto: string): string {
    return texto ? `
        <p class="alert alert-info">${texto}</p>
      ` : '';
  }

  private _clearTimer(): void {
    clearTimeout(this._timer);
    this._timer = setTimeout(() => {
      this.update();
    }, 3000);
  }
}

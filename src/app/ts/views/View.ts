import { Negociacao } from './../models/Negociacao';
import { Negociacoes } from '../models/Negociacoes';

export class View<T> {
  protected _element: Element;

  constructor(
    private _selector: string
  ) {
    this._element = document.querySelector(this._selector);
  }

  update(model: T): void {
    this._element.innerHTML = this._template(model);
  }

  protected _template(model: T): string {
    throw new Error('O método template deve ser implementado!');
  }
}

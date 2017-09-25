import { Negociacao } from './../models/Negociacao';
import { Negociacoes } from '../models/Negociacoes';

export abstract class View<T> {
  private _element: Element;

  constructor(
    private _selector: string
  ) {
    this._element = document.querySelector(this._selector);
  }

  update(model: T): void {
    this._element.innerHTML = this._template(model);
  }

  abstract _template(model: T): string;
}

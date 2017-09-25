import { Negociacao } from './../models/Negociacao';
import { Negociacoes } from '../models/Negociacoes';

export abstract class View<T> {
  private _element: JQuery;

  constructor(
    private _selector: string
  ) {
    this._element = $(this._selector);
  }

  update(model: T): void {
    this._element.html(this._template(model));
  }

  abstract _template(model: T): string;
}

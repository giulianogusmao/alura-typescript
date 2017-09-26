import { Negociacao } from './index';

export class Negociacoes {

  constructor(
    private _lista: Negociacao[] = []
  ) {

  }

  add(negociacao: Negociacao): void {
    this._lista.push(negociacao);
  }

  toArray(): Array<Negociacao> {
    return [].concat(this._lista);
  }
}

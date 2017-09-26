import { Negociacao } from './index';

export class Negociacoes {

  constructor(
    private _lista: Negociacao[] = []
  ) {

  }

  add(negociacao: Negociacao): void {
    this._lista.push(negociacao);
  }

  toArray(): Negociacao[] {
    return ([] as Negociacao[]).concat(this._lista);
  }
}

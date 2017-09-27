import { Negociacao, IsEquals } from './index';

export class Negociacoes implements IsEquals<Negociacoes> {

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

  isEquals(negociacoes: Negociacoes) {
    return JSON.stringify(this.toArray()) == JSON.stringify(negociacoes.toArray());
  }
}

import { Negociacao } from './index';

export class Negociacoes {

  constructor(
    private _lista: Negociacao[] = []
  ) {

  }

  add(negociacao: Negociacao): void {

    // não permite inserir negociacao repetida
    if (this._existe(negociacao))
      return;

    this._lista.push(negociacao);
  }

  toArray(): Negociacao[] {
    return ([] as Negociacao[]).concat(this._lista);
  }

  private _existe(negociacao: Negociacao) {
    return this._lista.some(negociacaoExistente =>
      negociacaoExistente.isEquals(negociacao)
    )
  }

}

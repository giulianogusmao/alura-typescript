import { MinhasInterfaces } from './MinhasInterfaces';

export class Negociacao implements MinhasInterfaces<Negociacao> {

  constructor(
    readonly data: Date,
    readonly quantidade: number,
    readonly valor: number
  ) {
    this.quantidade = parseInt(this.quantidade.toString());
    this.valor = Number(parseFloat(this.valor.toString()).toFixed(2));
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }

  isEquals(negociacao: Negociacao) {
    return this.data.getDate() == negociacao.data.getDate()
      && this.data.getMonth() == negociacao.data.getMonth()
      && this.data.getFullYear() == negociacao.data.getFullYear()
      && this.quantidade == negociacao.quantidade
      && this.valor == negociacao.valor;
  }

  toStr(): string {
    return JSON.stringify(this);
  }
}

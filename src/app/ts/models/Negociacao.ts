export class Negociacao {

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
}

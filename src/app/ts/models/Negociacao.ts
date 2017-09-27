import { MinhasInterfaces } from './MinhasInterfaces';

export class Negociacao implements MinhasInterfaces<Negociacao> {

  constructor(
    readonly data: Date,
    readonly quantidade: number,
    readonly valor: number
  ) {
    this.quantidade = parseInt(this.quantidade.toString());
    this.valor = Number(parseFloat(this.valor.toString()).toFixed(2));

    // não permite adicionar negociacoes geradas nos finais de semana
    if (!this._isDiaUtil(this.data)) {
      throw 'Data da negociação deve ser um dia útil';
    }
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

  private _isDiaUtil(date: Date) {
    return date.getDay() != DiaSemana.Sabado && date.getDay() != DiaSemana.Domingo;
  }

}

enum DiaSemana {
  Domingo,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado
}

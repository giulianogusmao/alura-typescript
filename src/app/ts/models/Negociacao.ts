export class Negociacao {
  private _volume: number;

  constructor(
    private _data: Date,
    private _quantidade: number = 1,
    private _valor: number = 0
  ) {
    this._quantidade = parseInt(this._quantidade.toString());
    this._valor = Number(parseFloat(this.valor.toString()).toFixed(2));
    this._calcVolume();
  }

  get data(): Date {
    return new Date(this._data.getTime());
  }

  get quantidade(): number {
    return this._quantidade;
  }

  get valor(): number {
    return this._valor;
  }

  get volume(): number {
    return this._volume;
  }

  private _calcVolume(): void {
    this._volume = this.quantidade * this.valor;
  }
}

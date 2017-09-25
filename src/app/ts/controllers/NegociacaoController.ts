import { DateHelper } from './../helpers/DateHelper';
import { Negociacao } from './../models/Negociacao';

export class NegociacaoController {
  protected _inputData: HTMLInputElement;
  protected _inputQuantidade: HTMLInputElement ;
  protected _inputValor: HTMLInputElement;

  constructor() {
    let $ = document.querySelector.bind(document);

    this._inputData = <HTMLInputElement>$('#data');
    this._inputQuantidade = <HTMLInputElement>$('#quantidade');
    this._inputValor = <HTMLInputElement>$('#valor');
  }

  adiciona(event: Event) {
    event.preventDefault();

    console.groupCollapsed('Adiciona Negociação');
    let negociacao = this._criaNegociacao();
    console.log(negociacao);
    console.log(`Ano: ${negociacao.data.getFullYear()}, qtd: ${negociacao.quantidade}, R$: ${negociacao.valor}, volume: ${negociacao.volume}`);
    console.groupEnd();
  }

  private _criaNegociacao() {
    let data = this._inputData.value,
        quantidade = this._inputQuantidade.value,
        valor = this._inputValor.value;

    let negociacao = new Negociacao(
      new Date(data.replace(/-/g, ',')),
      parseInt(quantidade),
      parseFloat(valor)
    );

    console.log('cria negociacao');
    return negociacao;
  }
}

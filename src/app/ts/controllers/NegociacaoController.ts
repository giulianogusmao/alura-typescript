import { DateHelper } from './../helpers/DateHelper';
import { Negociacao } from './../models/Negociacao';

export class NegociacaoController {
  protected _inputData;
  protected _inputQuantidade;
  protected _inputValor;

  constructor() {
    let $ = document.querySelector.bind(document);

    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
  }

  adiciona(event) {
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
      new Date(data),
      quantidade,
      valor
    );

    console.log('cria negociacao');
    return negociacao;
  }
}

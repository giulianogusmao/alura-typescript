import { MensagensView } from './../views/MensagensView';
import { NegociacoesView } from './../views/NegociacoesView';
import { DateHelper } from './../helpers/DateHelper';
import { Negociacao } from './../models/Negociacao';
import { Negociacoes } from '../models/Negociacoes';

export class NegociacaoController {
  protected _inputData: HTMLInputElement;
  protected _inputQuantidade: HTMLInputElement ;
  protected _inputValor: HTMLInputElement;

  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView('#listaNegociacoes');
  private _mensagensView = new MensagensView('#mensagemView');

  constructor() {
    let $ = document.querySelector.bind(document);

    this._inputData = <HTMLInputElement>$('#data');
    this._inputQuantidade = <HTMLInputElement>$('#quantidade');
    this._inputValor = <HTMLInputElement>$('#valor');

    this._negociacoesView.update(this._negociacoes);
  }

  adiciona(event: Event): void {
    event.preventDefault();

    let negociacao = this._criaNegociacao();
    this._negociacoes.add(negociacao);
    this._negociacoesView.update(this._negociacoes);
    this._mensagensView.update('Negociação incluída com sucesso!');
    this._limpaFormulario();
  }

  private _criaNegociacao(): Negociacao {
    let data = this._inputData.value,
        quantidade = this._inputQuantidade.value,
        valor = this._inputValor.value;

    let negociacao = new Negociacao(
      new Date(data.replace(/-/g, ',')),
      parseInt(quantidade),
      parseFloat(valor)
    );

    return negociacao;
  }

  private _limpaFormulario(): void {
    this._inputData.value = '';
    this._inputQuantidade.value = '1';
    this._inputValor.value = '0.0';
  }
}

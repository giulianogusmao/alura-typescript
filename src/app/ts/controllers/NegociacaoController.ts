import { DateHelper } from './../helpers/index';
import { Negociacao, Negociacoes } from './../models/index';
import { MensagensView, NegociacoesView } from './../views/index';

export class NegociacaoController {
  protected _inputData: JQuery;
  protected _inputQuantidade: JQuery ;
  protected _inputValor: JQuery;

  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView('#listaNegociacoes');
  private _mensagensView = new MensagensView('#mensagemView');

  constructor() {
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');

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
    let data = <string>this._inputData.val(),
        quantidade = <string>this._inputQuantidade.val(),
        valor = <string>this._inputValor.val();

    let negociacao = new Negociacao(
      new Date(data.replace(/-/g, ',')),
      parseInt(quantidade),
      parseFloat(valor)
    );

    return negociacao;
  }

  private _limpaFormulario(): void {
    this._inputData.val('');
    this._inputQuantidade.val('1');
    this._inputValor.val('0.0');
  }
}

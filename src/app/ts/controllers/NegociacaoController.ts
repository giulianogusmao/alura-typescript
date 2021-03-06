import { Negociacao, Negociacoes } from './../models/index';
import { MensagensView, NegociacoesView } from './../views/index';
import { DateHelper, logaTempoDeExecucao, injectorDOM, throttle } from './../helpers/index';
import { NegociacaoesService } from './../Services/index';

export class NegociacaoController {

  @injectorDOM('#data')
  protected _inputData: JQuery;

  @injectorDOM('#quantidade')
  protected _inputQuantidade: JQuery;

  @injectorDOM('#valor')
  protected _inputValor: JQuery;

  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView('#listaNegociacoes');
  private _mensagensView = new MensagensView('#mensagemView');
  private _negociacoesService = new NegociacaoesService();

  constructor() {
    this._negociacoesView.update(this._negociacoes);
  }

  // @logaTempoDeExecucao(true)
  @throttle()
  adiciona(event?: Event): void {
    this._negociacoes.add(this._criaNegociacao());
    this._negociacoesView.update(this._negociacoes);
    this._mensagensView.update('Negociação incluída com sucesso!');
    this._limpaFormulario();
  }

  @throttle()
  async importa() {
    try {
      const negociacoes = await this._negociacoesService.getNegociacoes();
      negociacoes.forEach(negociacao => this._negociacoes.add(negociacao));
      this._negociacoesView.update(this._negociacoes);
      this._mensagensView.update('Negociações importadas com sucesso!');
    } catch (err) {
      this._mensagensView.update(err);
    }
  }

  private _criaNegociacao(): Negociacao {
    let data = <string>this._inputData.val(),
      quantidade = <string>this._inputQuantidade.val(),
      valor = <string>this._inputValor.val();

    let negociacao: Negociacao;

    try {
      negociacao = new Negociacao(
        DateHelper.strToDate(data),
        parseInt(quantidade),
        parseFloat(valor)
      );
      return negociacao;

    } catch (err) {
      this._mensagensView.update(err);
      throw new Error(err);
    }
  }

  private _limpaFormulario(): void {
    this._inputData.val('');
    this._inputQuantidade.val('1');
    this._inputValor.val('0.0');
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

import { Negociacao, Negociacoes } from './../models/index';
import { MensagensView, NegociacoesView } from './../views/index';
import { DateHelper, logaTempoDeExecucao, injectorDOM } from './../helpers/index';

export class NegociacaoController {

  @injectorDOM('#data')
  protected _inputData: JQuery;

  @injectorDOM('#quantidade')
  protected _inputQuantidade: JQuery ;

  @injectorDOM('#valor')
  protected _inputValor: JQuery;

  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView('#listaNegociacoes');
  private _mensagensView = new MensagensView('#mensagemView');

  constructor() {
    this._negociacoesView.update(this._negociacoes);
  }

  // @logaTempoDeExecucao(true)
  adiciona(event: Event): void {
    event.preventDefault();

    let negociacao = this._criaNegociacao();

    if (!this._isDiaUtil(negociacao.data)) { // regra de negócio deve ser inserido na model negociacao
      this._mensagensView.update('Data da negociação deve ser um dia útil');
      return;
    }

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
      DateHelper.strToDate(data),
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

  private  _isDiaUtil(date: Date) {
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

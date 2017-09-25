import { DateHelper } from './../helpers/DateHelper';
import { NegociacaoController } from './../controllers/NegociacaoController';

export class NegociacaoControllerBuilder extends NegociacaoController {

  adiciona(event: Event) {
    if (!this._inputData.val())
      this._inputData.val(DateHelper.dateToStr(new Date(), false));

    if (Number(this._inputQuantidade.val()) <= 0)
      this._inputQuantidade.val((1 + parseInt((Math.random() * 10).toString())).toString());

    if (Number(this._inputValor.val()) <= 0)
      this._inputValor.val((Math.random() * 1001).toFixed(2));

    super.adiciona(event);
  }
}

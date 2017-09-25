import { DateHelper } from './../helpers/DateHelper';
import { NegociacaoController } from './../controllers/NegociacaoController';

export class NegociacaoControllerBuilder extends NegociacaoController {

  adiciona(event: Event) {
    if (!this._inputData.value)
      this._inputData.value = DateHelper.dateToStr(new Date(), false);

    if (Number(this._inputQuantidade.value) <= 0)
      this._inputQuantidade.value = (1 + parseInt((Math.random() * 10).toString())).toString();

    if (Number(this._inputValor.value) <= 0)
      this._inputValor.value = (Math.random() * 1001).toFixed(2);

    super.adiciona(event);
  }
}

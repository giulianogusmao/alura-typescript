import { Http } from './index';
import { NegociacaoParcial, Negociacao } from '../models/index';

export class NegociacaoesService {

  private _http = new Http<NegociacaoParcial>();

  constructor() {
  }

  getNegociacoes(): Promise<Negociacao[]> {
    return this._http
      .get('http://localhost:8080/dados')
      .then(negociacoesParcial =>
        negociacoesParcial.map(item =>
          new Negociacao(
            new Date(),
            item.vezes,
            item.montante
          )
        )
      )
      .catch(err => {
        throw new Error('Não foi possível carregar as negociações');
      });
  }
}

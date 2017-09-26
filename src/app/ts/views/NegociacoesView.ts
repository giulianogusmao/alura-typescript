import { View } from './index';
import { DateHelper } from './../helpers/index';
import { Negociacao, Negociacoes } from './../models/index';

export class NegociacoesView extends View<Negociacoes> {

  _template(model: Negociacoes): string {
    return `
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>DATA</th>
          <th>QUANTIDADE</th>
          <th>VALOR</th>
          <th>VOLUME</th>
        </tr>
      </thead>

      <tbody>
        ${model.toArray().map(negociacao => `
          <tr>
            <td>${DateHelper.dateToStr(negociacao.data)}</td>
            <td>${negociacao.quantidade}</td>
            <td>${negociacao.valor}</td>
            <td>${negociacao.volume}</td>
          </tr>
        `).join('')}
      </tbody>

      <tfoot>
      </tfoot>
    </table>
    `;
  }
}

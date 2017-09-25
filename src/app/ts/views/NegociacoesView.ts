import { DateHelper } from './../helpers/DateHelper';
import { Negociacao } from './../models/Negociacao';
import { Negociacoes } from './../models/Negociacoes';

export class NegociacoesView {
  private _element: Element;

  constructor(
    private _selector: string
  ) {
    this._element = document.querySelector(this._selector);
  }

  update(model: Negociacoes): void {
    this._element.innerHTML = this._template(model.toArray());
  }

  private _template(model: Negociacao[]): string {
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
        ${model.map(negociacao => `
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

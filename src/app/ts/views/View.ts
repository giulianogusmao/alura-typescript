export abstract class View<T> {
  private _element: JQuery;

  constructor(
    private _selector: string,
    private _escapar: boolean = true
  ) {
    this._element = $(this._selector);
  }

  update(model: T): void {
    let template = this._template(model);

    // remover scripts dos templates
    if (this._escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }

    this._element.html(template);
  }

  abstract _template(model: T): string;
}

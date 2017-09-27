export interface handlerError {
  (res: Response): Response;
}

export class Http<ModelParcial> {

  get(url: string, cbError: handlerError = this._handlerError): Promise<ModelParcial[]> {
    return fetch(url)
      .then(res => cbError(res))
      .then(res => res.json())
      .catch(err => {
        console.error(err.message);
        return err;
      });
  }

  private _handlerError(res: Response): Response {
    if (res.ok)
      return res;

    throw new Error(res.statusText);
  }
}

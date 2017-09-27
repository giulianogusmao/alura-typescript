/*
  Decorator omde o elemento 'seletor' só é carregado no DOM quando for acessado, evitando de carregar elementos
  do DOM desnecessariamente;

  Sempre que a variável 'key' for acessada, ela dispara um get que lê sua informação,
  assim que esse get for disparado o decorator verifica se a variavel já possui o elemento 'seletor'
  como valor, caso não possua, ele carrega o elemento e injeta na variável;
*/
export function injectorDOM(seletor: string) {
  return function (target: any, key: string) {

    let elemento: JQuery;

    Object.defineProperty(target, key, {
      get: () => {
        if (!elemento) {
          elemento = $(seletor);
        }

        return elemento;
      }
    })
  };
}

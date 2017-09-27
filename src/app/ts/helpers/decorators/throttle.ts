/*
  Decorator que posterga a execução do método
*/
export function throttle(milissegundos: number = 500) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let metodoOriginal = descriptor.value;
    let timer = 0;

    descriptor.value = function() {
      if(event)
        event.preventDefault();

      clearTimeout(timer);
      timer = setTimeout(() => metodoOriginal.apply(this, arguments), milissegundos);
    }

    return descriptor;
  }
}

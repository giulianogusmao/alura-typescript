export function logaTempoDeExecucao(emSegundos: boolean = false) {
  /*
    target -> instancia no qual o decorator foi passado
    property -> nome do método que esta sendo executado
    descriptor -> propriedades do método que esta sendo executado
  */
  return (target: any, property: string, descriptor: PropertyDescriptor) => {
    // armazena metodo original
    const metodoOriginal = descriptor.value;

    descriptor.value = function() {
      let divisor = 1;
      let unidade = 'ms';

      if (emSegundos) {
        divisor = 1000;
        unidade = 's';
      }

      const t1 = performance.now();
      const retorno = metodoOriginal.apply(this, arguments);
      console.log(`Tempo de execução do método ${property} foi de ${(performance.now() - t1)/divisor} ${unidade}`);
      return retorno;
    }

    return descriptor;
  };
}

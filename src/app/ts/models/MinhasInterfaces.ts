import { ToStr } from './ToStr';
import { IsEquals } from './IsEquals';

/**
 * Exemplo de como uma interface pode estender de várias interfaces. Já uma
 * classe só pode estender de uma única interface, mas pode implementar
 * diversas interfaces.
 */
export interface MinhasInterfaces<T> extends IsEquals<T>, ToStr {

}

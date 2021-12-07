import { inspect } from '../decorators/inspect.js';
import { logarTempoDeExecucao } from '../decorators/logar-tempo-de-execucao.js';

export abstract class View<T> {

    protected elemento: HTMLElement;

    constructor(seletor: string) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
        }
      
    }

    // @logarTempoDeExecucao(true)
    // @inspect
    public update(model: T): void {
        // const t1 = performance.now()
        let template = this.template(model);
        this.elemento.innerHTML = template;
        const t2 = performance.now()
        // console.log(`Tempo de execução ${(t2 - t1)/1000} s`)
    }

    protected abstract template(model: T): string;
}
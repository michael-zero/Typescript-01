export function logarTempoDeExecucao(emSegundos: boolean = false) {
    return function(
        target: any,
        propertyKey: string, //nome do método
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]) {//obtendo os parametros da funcao englobada pelo Decorator
            
            let divisor = 1; 
            let unidade = 'milisegundos'
            if(emSegundos){
                divisor = 1000;
                unidade = 'segundos'
            }
            const t1 = performance.now();
           
            const retorno = metodoOriginal.apply(this, args); //obtendo o retorno e realocando o this para 
            //ser igual ao contexto da funcao que é chamada.
            const t2 = performance.now();
           
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1)/divisor} ${unidade}`);
            retorno
        };

        return descriptor;
    }
}
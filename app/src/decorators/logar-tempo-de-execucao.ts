export function logarTempoDeExecucao() {
    return function(
        target: any,
        propertyKey: string, //nome do método
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]) {//obtendo os parametros da funcao englobada pelo Decorator
            const t1 = performance.now();
           
            const retorno = metodoOriginal.apply(this, args); //obtendo o retorno e realocando o this para 
            //ser igual ao contexto da funcao que é chamada.
            const t2 = performance.now();
           
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1)/1000} segundos`);
            retorno
        };

        return descriptor;
    }
}
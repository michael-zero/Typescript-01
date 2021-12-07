export function domInjector(seletor: string){
    return function(target: any, propertyKey: string){
        console.log(`Modificando prototype ${target.constructor.name}
        e adicionando getter para a propriedade ${propertyKey}`)

        // o closure sabera da existencia do elemento apos a primeira execucao
        let elemento: HTMLElement; 

        const getter = function(){
            if(!elemento){
                console.log(`Buscando do DOM com o seletor ${seletor} para injetar ${propertyKey}`)
                elemento = <HTMLElement>document.querySelector(seletor)
            }
          
            return elemento
        }

        Object.defineProperty(target, propertyKey, {get: getter}) //aplica uma propriedade em um elemento
    }
}
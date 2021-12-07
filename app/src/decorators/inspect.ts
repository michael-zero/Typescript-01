export function inspect(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor //serve para salvar sobre o metodo origial algumas informacoes
    )
    {
        const metodoOriginal = descriptor.value
        
        descriptor.value = function(...args: any[]){
            console.log(`--- Método ${propertyKey}`)
            console.log(`--- parâmetros: ${JSON.stringify(args)}`)
            const retorno = metodoOriginal.apply(this, args)
            console.log(`--- retorno: ${JSON.stringify(retorno)}`)
            return retorno
        }

        return descriptor
    }
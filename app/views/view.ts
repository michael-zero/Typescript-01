export abstract class View<T>{

    protected elemento: HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean){
        const elemento = document.querySelector(seletor)
        if(elemento){
            this.elemento = elemento as HTMLElement
        }else{
            throw new Error("Seletor não existe na DOM.")
        }
        if(escapar){
            this.escapar = escapar
        }
    }


    update(model: T): void {
        /*Método para atualizar a view e remover scripts maliciosos*/
        let template = this.template(model)
        if(this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/,'')
        }
        this.elemento.innerHTML = template
    }

    //so o pai e as filhas tem acesso a este metodo
    protected abstract template(model: T): string;

}
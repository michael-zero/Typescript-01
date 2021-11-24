export class Negociacao {
   
    //cria atributos na classe com o mesmo nome dos parametros do construtor
    constructor(
        private _data: Date, //usando a prop readonly, vc n precisa criar getters ou setters
        public readonly _quantidade: number,
        public readonly  _valor:number) {}

    get valor(): number {
        return this.valor
    }

    get volume() : number {
        return this._quantidade * this._valor;
    }
    get data(): Date {
        //reaonly permitia mudar com o metodo .setTime()..
        //nesse caso o get é melhor opção
        const data = new Date(this._data.getTime()); //garante que nao sera permitido mudar a data = prog. defensiva
        return data;
    }
}

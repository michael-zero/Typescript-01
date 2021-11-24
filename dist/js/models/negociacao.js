export class Negociacao {
    //cria atributos na classe com o mesmo nome dos parametros do construtor
    constructor(_data, //usando a prop readonly, vc n precisa criar getters ou setters
    _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get valor() {
        return this.valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    get data() {
        //reaonly permitia mudar com o metodo .setTime()..
        //nesse caso o get é melhor opção
        const data = new Date(this._data.getTime()); //garante que nao sera permitido mudar a data = prog. defensiva
        return data;
    }
}

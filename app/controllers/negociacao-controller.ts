import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';

export class NegociacaoController {

    // Campos do index.html
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    

    // Vetor de negociacoes
    private negociacoes = new Negociacoes();
    //template que recebe o "id" da div no index.html
    private negociacoesView = new NegociacoesView("#negociacoesView", true)

    //campo da mensagem
    private mensagemView = new MensagemView("#mensagemView", false)

    // private readonly DOMINGO = 0
    // private readonly SABADO  = 6


    constructor() {
        this.inputData = <HTMLInputElement>document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = <HTMLInputElement>document.querySelector('#valor')
        //passa o vetor de negociacoes 
        this.negociacoesView.update(this.negociacoes)
    }

    //add uma negociacao
    public adiciona(): void {

        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        )

        if(!this.ehDiaUtil(negociacao.data)){
            this.mensagemView.update("Apenas negociações em dias úteis são aceitas.")
            return 
        }

        this.negociacoes.adiciona(negociacao);
        this.atualizaView()
        this.limparFormulario();
    }

    private ehDiaUtil(data: Date): boolean {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO
    }

    
    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

     private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes)
        this.mensagemView.update("Negociação adicionada com sucesso.")
    }
}

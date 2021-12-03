import { NegociacaoController } from './controllers/negociacao-controller.js';
import { NegociacoesView } from './views/negociacoes-view.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');

if(form){
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});}else{
    throw new Error("Não iniciou a aplicação. Verifique o form.")
}

// const negociacoesView = new NegociacoesView
// const template = negociacoesView.template()
// console.log(template)
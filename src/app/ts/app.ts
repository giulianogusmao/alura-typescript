import { NegociacaoControllerBuilder } from './Builder/NegociacaoCtrlBuilder';
import { NegociacaoController } from './controllers/NegociacaoController';

var negociacaoCtrl = new NegociacaoController();


let $ = document.querySelector.bind(document);


$('form').addEventListener('submit', negociacaoCtrl.adiciona.bind(negociacaoCtrl));

// scripts para teste

// preenche o formulário antes do envio
var NegociacaoCtrlBuilder = new NegociacaoControllerBuilder();
$('form button[type="submit"]').addEventListener('click', NegociacaoCtrlBuilder.adiciona.bind(NegociacaoCtrlBuilder));

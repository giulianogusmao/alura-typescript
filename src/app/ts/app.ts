import { NegociacaoController } from './controllers/index';
import { NegociacaoControllerBuilder } from './Builder/index';

var negociacaoCtrl = new NegociacaoController();

$('form').on('submit', negociacaoCtrl.adiciona.bind(negociacaoCtrl));
$('.btn-importar').on('click', negociacaoCtrl.importa.bind(negociacaoCtrl));

// scripts para teste

// preenche o formulário antes do envio
var NegociacaoCtrlBuilder = new NegociacaoControllerBuilder();
$('form button[type="submit"]').on('click', NegociacaoCtrlBuilder.adiciona.bind(NegociacaoCtrlBuilder));

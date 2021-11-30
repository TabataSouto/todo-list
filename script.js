const button = document.querySelector('#criar-tarefa');
const inputTextoTarefa = document.querySelector('#texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const buttonDelete = document.querySelector('#apaga-tudo');
const buttonRemFinal = document.querySelector('#remover-finalizados');
const buttonRenSel = document.querySelector('#remover-selecionado');
const buttonSalTar = document.querySelector('#salvar-tarefas');
const buttonMoverCima = document.querySelector('#mover-cima');
const buttonMoverBaixo = document.querySelector('#mover-baixo');

// Adicionar nova tarefa na lista ao clicar no botão
function addTarefa() {
  // a) capturar informação input
  const inputValue = inputTextoTarefa.value;
  // b) criar a li para adicionar cada tarefa como li (filho do ol)
  const liList = document.createElement('li');
  liList.innerText = inputValue;
  // c) função para mudar a cor do bg da tarefa selecionada;
  liList.addEventListener('click', addRemove);
  // d) função para riscar tarefas completas;
  liList.addEventListener('dblclick', riscarTarefa);
  // e) adicionar de fato o elemento com o valor de input do usuário na página;
  listaTarefas.appendChild(liList);
  // Dica do colega Tonn para que a caixa de texto fique "selecionada" ao clicar no botão de adicionar nova tarefa;
  inputTextoTarefa.focus();
  // f) texto é apagado da caixa input ao clicar no botão de adicionar;
  inputTextoTarefa.value = '';
}

button.addEventListener('click', addTarefa);

// PINTAR UMA TAREFA POR VEZ
function addRemove(event) {
  console.log(event.target);
  const liList = event.target;
  const classSelected = document.querySelector('.selected');
  if (classSelected) {
    classSelected.classList.remove('selected');
  }
  liList.classList.add('selected');
}

// RISCAR A TAREFA CLICADA DUAS VEZES
// referencia: @SrTonn ajudou com o entendimento e realização do requisito
function riscarTarefa(event) {
  const liList = event.target;
  liList.classList.toggle('completed');
}

// APAGAR TODAS AS TAREFAS
buttonDelete.addEventListener('click', () => {
  listaTarefas.innerHTML = '';
});

// APAGAR TAREFAS FINALIZADAS
// referencia: @SrTonn ajudou com o entendimento e realização do requisito
buttonRemFinal.addEventListener('click', () => {
  const tarefaCompleta = document.querySelectorAll('.completed');
  tarefaCompleta.forEach((element) => {
    element.remove();
  });
});

// REMOVER SELECIONADO;
buttonRenSel.addEventListener('click', () => {
  const classSelected = document.querySelector('.selected');
  classSelected.remove();
});

// MOVER PARA CIMA;
buttonMoverCima.addEventListener('click', () => {
  // recuperar o li selecinoado
  const classSelected = document.querySelector('.selected');
  // se o li não tiver a classe .selected irá retornar "nulo";
  if (!classSelected) return;
  // se meu elemento selecionado(alguma li) for diferente que o pai(ol).filho na posição zero;
  if (classSelected !== listaTarefas.children[0]) {
  // criar uma variavel que ache o pai;
    const searchFather = classSelected.parentNode;
    // insertBefore tem dois paremetros, sendo o primeiro é "onde esta" e o segundo vai para "onde quer ir"
    searchFather.insertBefore(classSelected, classSelected.previousElementSibling);
  }
});

// MOVER PARA BAIXO;
buttonMoverBaixo.addEventListener('click', () => {
  // recuperar o li selecionado
  const classSelected = document.querySelector('.selected');
  // se o li não tiver a classe .selected irá retornar "nulo";
  // Referência: https://pt.stackoverflow.com/questions/455667/o-que-%C3%A9-uma-guard-clause ;
  if (!classSelected) return;
  // se meu elemento selecionado(alguma li) for diferente que o pai(ol).filho na última posição;
  if (classSelected !== listaTarefas.lastChild) {
  // criar uma variavel que ache o pai;
    const searchFather = classSelected.parentNode;
    // insertBefore tem dois paremetros, nesse caso sendo o primeiro "onde quero estar" e o segundo é "onde estou"
    searchFather.insertBefore(classSelected.nextElementSibling, classSelected);
  }
});

// SALVAR TAREFA
// https://developer.mozilla.org/pt-BR/docs/Web/API/Window/load_event
// https://developer.mozilla.org/pt-BR/docs/Web/API/GlobalEventHandlers/onload
// criar o localStorage no botão de clicar
buttonSalTar.addEventListener('click', () => {
  const myList = listaTarefas.innerHTML;
  localStorage.setItem('tarefas', myList);
});

// carregar informaçoes salvas no localStorage
function getTarefas() {
  const get = localStorage.getItem('tarefas');
  listaTarefas.innerHTML = get;
  listaTarefas.addEventListener('click', addRemove);
  listaTarefas.addEventListener('dblclick', riscarTarefa);
}
getTarefas();

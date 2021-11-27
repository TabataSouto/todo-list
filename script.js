// CRIAR NOVO ITEM DE TAREGA AO CLICAR NO BOTÃO
const button = document.querySelector('#criar-tarefa');
const inputTextoTarefa = document.querySelector('#texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const buttonDelete = document.querySelector('#apaga-tudo');
const buttonRemFinal = document.querySelector('#remover-finalizados');
const buttonRenSel = document.querySelector('#remover-selecionado');
// const buttonSalTar = document.querySelector('#salvar-tarefas');
const buttonMoverCima = document.querySelector('#mover-cima');
const buttonMoverBaixo = document.querySelector('#mover-baixo');

// a) capturar informação input
// b) pegar o resultado do input
// c) criar a li para adicionar cada tarefa como li (filho do ol)
// e) adicionar de fato o elemento com o valor de input do usuário na página com a informação inputada do usuário
// f) função para mudar a cor do bg da tarefa selecionada
// g) valor preenchido é apagado da caixa de texto ao clicar no botão de adicionar;
function addTarefa() {
  const inputValue = inputTextoTarefa.value;
  const liList = document.createElement('li');
  liList.innerText = inputValue;

  liList.addEventListener('click', addRemove);
  liList.addEventListener('dblclick', riscarTarefa);

  listaTarefas.appendChild(liList);
  inputTextoTarefa.focus();
  inputTextoTarefa.value = '';
}

button.addEventListener('click', addTarefa);

// PINTAR UMA TAREFA POR VEZ
function addRemove(event) {
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

// SALVAR TAREFA

// MOVER PARA CIMA;
buttonMoverCima.addEventListener('click', () => {
  // recuperar o li selecinoado
  const classSelected = document.querySelector('.selected');
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
  // se meu elemento selecionado(alguma li) for diferente que o pai(ol).filho na última posição;
  if (classSelected !== listaTarefas.lastChild) {
  // criar uma variavel que ache o panpm run cypress:openi;
    const searchFather = classSelected.parentNode;
    // insertBefore tem dois paremetros, nesse caso sendo o primeiro "onde quero estar" e o segundo é "onde estou"
    searchFather.insertBefore(classSelected.nextElementSibling, classSelected);
  }
});

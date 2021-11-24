// CRIAR NOVO ITEM DE TAREGA AO CLICAR NO BOTÃO
const button = document.querySelector('#criar-tarefa');
const inputTextoTarefa = document.querySelector('#texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

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
// referencia: @SrTonn para entendimento e realização do requisito
function riscarTarefa(event) {
  const liList = event.target;
  liList.classList.toggle('completed');
}

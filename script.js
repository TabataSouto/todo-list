// CRIAR NOVO ITEM DE TAREGA AO CLICAR NO BOTÃO
const button = document.querySelector('#criar-tarefa');
const inputTextoTarefa = document.querySelector('#texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

// a) capturar informação input e adi
function addTarefa() {
  // b) pegar o resultado do input
  const inputValue = inputTextoTarefa.value;

  // c) criar a li para adicionar cada tarefa como li (filho do ol)
  const liList = document.createElement('li');

  // e) adicionar de fato o elemento com o valor de input do usuário na página com a informação inputada do usuário
  liList.innerText = inputValue;

  // função para mudar a cor do bg da tarefa selecionada
  liList.addEventListener('click', addRemove);
  listaTarefas.appendChild(liList);

  // f) valor preenchido é apagado da caixa de texto ao clicar no botão de adicionar;
  inputTextoTarefa.value = '';
}
button.addEventListener('click', addTarefa);

// PINTAR UMA TAREFA POR VEZ
function addRemove(event) {
  const taskName = event.target;
  const classSelected = document.querySelector('.selected');
  if (classSelected) {
    classSelected.classList.remove('selected');
  }
  taskName.classList.add('selected');
}

// CRIAR NOVO ITEM DE TAREGA AO CLICAR NO BOTÃO
const button = document.querySelector('#criar-tarefa');

// 1) capturar informação input e adi
function addTarefa() {
  // pegou o resultado do input
  const inputTextoTarefa = document.querySelector('#texto-tarefa');
  const inputValue = inputTextoTarefa.value;
  // criou a li pra cada tarefa adiciona no ol que é o pai da li
  const listaTarefas = document.querySelector('#lista-tarefas');
  const liList = document.createElement('li');
  liList.innerText = inputValue;
  listaTarefas.appendChild(liList);
  // 3) ao clicar no botão "adicionar" a tarefa vai pra lista e some da caixa de input;
  inputTextoTarefa.value = '';
}
button.addEventListener('click', addTarefa);

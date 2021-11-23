// CRIAR NOVO ITEM DE TAREGA AO CLICAR NO BOTÃO
const button = document.querySelector('#criar-tarefa');
const inputTextoTarefa = document.querySelector('#texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

// 1) capturar informação input e adi
function addTarefa() {
  // pegou o resultado do input
  const inputValue = inputTextoTarefa.value;

  // criou a li pra cada tarefa adiciona no ol que é o pai da li
  const liList = document.createElement('li');

  // mudar a cor de fundo de cada li selecionado
  liList.addEventListener('click', function() {
    liList.style.backgroundColor = 'rgb(128, 128, 128)';
  });

  // adiciona de fato o elemento com o valor de input do usuário na página
  liList.innerText = inputValue;
  liList.classList = 'item';
  listaTarefas.appendChild(liList);

  // ao clicar no botão "adicionar" a tarefa vai pra lista e some da caixa de input;
  inputTextoTarefa.value = '';
}
button.addEventListener('click', addTarefa);

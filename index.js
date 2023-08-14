// 1. **Criação de Tarefa:**
//     - Crie uma função chamada **`createTask(title, description)`** que recebe o titulo e descrição como parâmetro e permite adicionar uma nova tarefa à lista.
//     - A função deve verificar se o título da tarefa é fornecido. Se não for, deve exibir uma mensagem de erro indicando que o título é obrigatório.
//     - A nova tarefa deve ser um objeto com as propriedades: **`title`**, **`description`** e **`completed`** (inicializado como **`false`**).
const arrayTask = [];
const title = prompt("Qual o título da tarefa? ");
const description = prompt("Qual a descrição da tarefa? ");
let completed = false;

// percorrer os indices do array
const indexTasks = arrayTask.findIndex((tasks) => tasks.title);

function createTask(title, description) {
  if (title === "") {
    alert("O título da tarefa é obrigatório.");
  } else {
    arrayTask.push({
      title,
      description,
      completed,
    });
  }
}

createTask(title, description);

// 2. **Listagem de Tarefas:**
//     - Crie uma função chamada **`listTasks()`** que exiba uma lista formatada de todas as tarefas cadastradas.
//     - Percorra o array de tarefas e mostre o índice, título, descrição e o status (concluída ou não) de cada tarefa.
function listTasks() {
  if (completed) {
    completed = "Tarefa concluída!";
  } else {
    completed = "Tarefa NÃO concluída!";
  }
  arrayTask.forEach((tasks) => {
    console.log(
      `${tasks.indexTasks} | ${tasks.title} | ${tasks.description} | ${tasks.completed}`
    );
  });
}

// 3. **Atualização de Status de Tarefa:**
//     - Crie uma função chamada **`updateTaskStatus(index, completed)`** que permita atualizar o status de conclusão de uma tarefa.
//     - Verifique se o índice informado existe e, em seguida, atualize a propriedade **`completed`** da tarefa correspondente para o valor fornecido.

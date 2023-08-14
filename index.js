// 1. **Criação de Tarefa:**
//     - Crie uma função chamada **`createTask(title, description)`** que recebe o titulo e descrição como parâmetro e permite adicionar uma nova tarefa à lista.
//     - A função deve verificar se o título da tarefa é fornecido. Se não for, deve exibir uma mensagem de erro indicando que o título é obrigatório.
//     - A nova tarefa deve ser um objeto com as propriedades: **`title`**, **`description`** e **`completed`** (inicializado como **`false`**).
const arrayTask = [];
const title = "Café da manhã"; //aqui vai o prompt depois
const description = "Fazer um café da manhã, às 7h da matina."; //aqui vai outro prompt
let completed = false;

function createTask(title, description) {
  if (title === "") {
    console.log("O título da tarefa é obrigatório.");
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
  arrayTask.forEach((tasks, index) => {
    if (!completed) {
      tasks.completed = "Tarefa NÃO concluída!";
    } else {
      tasks.completed = "Tarefa concluída!";
    }
    console.log(
      `${index} | ${tasks.title} | ${tasks.description} | ${tasks.completed}`
    );
  });
}

listTasks();

// 3. **Atualização de Status de Tarefa:**
//     - Crie uma função chamada **`updateTaskStatus(index, completed)`** que permita atualizar o status de conclusão de uma tarefa.
//     - Verifique se o índice informado existe e, em seguida, atualize a propriedade **`completed`** da tarefa correspondente para o valor fornecido.

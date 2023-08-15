let tasks = [];

function global(username) {
  let continuar = true;

  do {
    const pergunta = parseInt(
      prompt(
        "Escolha uma das opções: \n 1-Criação de Tarefa \n 2-Listar Tarefas \n 3-Atualização de Status \n 4-Atualização de Tarefa \n 5-Excluir Tarefa \n 6-Atualizar Local Storage"
      )
    );

    switch (pergunta) {
      case 1:
        const title = prompt("Digite o título da task!");
        const description = prompt("Digite a descrição da task!");
        if (!title) {
          alert("Digite o título da tarefa!");
        } else {
          createTask(username, title, description);
        }
        break;
      case 2:
        listTasks(username);
        break;
      case 3:
        const indexUpdate = parseInt(
          prompt("Digite o index da mensagem que quer mudar o Status!")
        );
        let complete = Number(
          prompt(
            "Digite se quer completar ou não completar a task! 1-Completa | 2-Não Completa"
          )
        );
        let completed;
        if (complete === 1) {
          completed = true;
        } else if (complete === 2) {
          completed = false;
        }
        updateTaskStatus(username, indexUpdate, completed);
        break;
      case 4:
        const indice = parseInt(
          prompt("Digite o index da mensagem que quer mudar o Status!")
        );
        const newTitle = prompt("Digite o novo título da mensagem!");
        const newDescription = prompt("Digite a nova descrição da mensagem!");

        updateTask(username, indice, newTitle, newDescription);
        break;
      case 5:
        const indiceDelete = parseInt(
          prompt("Digite o index da mensagem que quer mudar o Status!")
        );
        deleteTask(username, indiceDelete);
        break;
      case 6:
        continuar = false;
        break;
      default:
        alert("Digite uma das opções corretas!");
        break;
    }
  } while (continuar === true);
}

// // 1. **Criação de Tarefa:**
// // //     - Crie uma função chamada **`createTask(title, description)`** que
// recebe o titulo e descrição como parâmetro e permite adicionar uma nova tarefa à lista.
// // //     - A função deve verificar se o título da tarefa é fornecido.
// Se não for, deve exibir uma mensagem de erro indicando que o título é obrigatório.
// // //     - A nova tarefa deve ser um objeto com as propriedades:
// **`title`**, **`description`** e **`completed`** (inicializado como **`false`**).

function createTask(username, title, description) {
  let task = {
    title,
    description,
    completed: false,
  };
  username.tasks.push(task);
  const userNameString = JSON.stringify(username);
  localStorage.setItem(username.username, userNameString);
}

// // 2. **Listagem de Tarefas:**
// //     - Crie uma função chamada **`listTasks()`** que exiba uma
//         lista formatada de todas as tarefas cadastradas.
// //     - Percorra o array de tarefas e mostre o índice, título,
//         descrição e o status (concluída ou não) de cada tarefa.

function listTasks(username) {
  for (let index = 0; index < username.tasks.length; index++) {
    console.log(`Índice: ${index} | Título: ${
      username.tasks[index].title
    } | Descrição: ${username.tasks[index].description} | Status: ${
      username.tasks[index].completed ? "Completa" : "Não completa"
    }
        `);
  }
}

// // 3. **Atualização de Status de Tarefa:**
// //     - Crie uma função chamada **`updateTaskStatus(index, completed)`**
// que permita atualizar o status de conclusão de uma tarefa.
// //     - Verifique se o índice informado existe e, em seguida, atualize
//  a propriedade **`completed`** da tarefa correspondente para o valor fornecido.

function updateTaskStatus(username, index, completed) {
  for (let i = 0; i < username.tasks.length; i++) {
    if (username.tasks[i] === username.tasks[index]) {
      username.tasks[i].completed = completed;
      const userNameString = JSON.stringify(username);
      localStorage.setItem(username.username, userNameString);
    }
  }
}

// // 4. **Atualização de Tarefa:**
// //     - Crie uma função chamada **`updateTask(index, newTitle, newDescription)`**
//  que permita atualizar o título e a descrição de uma tarefa existente.
// //     - Verifique se o índice fornecido é válido e se o novo título é fornecido.
// Se não for, exiba mensagens de erro apropriadas.
// //     - Atualize o título e a descrição da tarefa selecionada com os valores fornecidos.

function updateTask(username, index, newTitle, newDescription) {
  for (let i = 0; i < username.tasks.length; i++) {
    if (username.tasks[i] === username.tasks[index]) {
      username.tasks[i].title = newTitle;
      username.tasks[i].description = newDescription;
      const userNameString = JSON.stringify(username);
      localStorage.setItem(username.username, userNameString);
    }
  }
}

// 5. **Exclusão de Tarefa:**
// //     - Crie uma função chamada **`deleteTask(index)`** que permita excluir uma tarefa da lista.
// //     - Verifique se o índice fornecido é válido e, em seguida, remova a tarefa correspondente da

function deleteTask(username, index) {
  for (let i = 0; i < username.tasks.length; i++) {
    if (username.tasks[i] === username.tasks[index]) {
      username.tasks.splice(username.tasks[i], 1);
      const userNameString = JSON.stringify(username);
      localStorage.setItem(username.username, userNameString);
    }
  }
}

// // 1. **Criar Usuário:**
// //     - Crie uma função chamada **`createUser(username, password)`** que recebe o
// nome de usuário e senha por parâmetro e permite criar um novo usuário.
// //     - Verifique se o nome de usuário (username) e a senha (password) são fornecidos.
// Se não forem, exiba mensagens de erro apropriadas.
// //     - Crie um objeto de usuário contendo as propriedades: **`username`**,
// **`password`** e **`tasks`** (inicializado como um array vazio).

const buttonCreate = document.getElementById("createUser");

buttonCreate.addEventListener("click", function prompts() {
  const user = prompt("Digite o nome de usuário!");
  const senha = prompt("Digite a senha que deseja!");
  createUser(user, senha);
});

function createUser(username, password) {
  if (!username || !password) {
    alert("Preencha os 2 campos!");
  } else {
    const usuario = {
      username,
      password,
      tasks: [],
    };
    const usuarioLocal = JSON.stringify(usuario);
    localStorage.setItem(usuario.username, usuarioLocal);
    alert("Usuário Cadastrado com sucesso!");
  }
}

// // 2. **Login:**
// //     - Crie uma função chamada **`login(username, password)`** que permita um usuário fazer login.
// //     - Verifique se o nome de usuário e a senha fornecidos correspondem a um usuário existente.
// Se corresponderem, retorne o objeto de usuário correspondente. Se não, retorne uma mensagem.

const buttonLogin = document.getElementById("login");

buttonLogin.addEventListener("click", function prompts() {
  const user = prompt("Digite o nome de usuário!");
  const senha = prompt("Digite a senha que deseja!");
  login(user, senha);
});

function login(username, password) {
  const user = localStorage.getItem(username);
  const userObject = JSON.parse(user);
  if (userObject.username !== username || userObject.password !== password) {
    alert("Usuário ou senha não correspondem!");
  } else {
    global(userObject);
  }
}

// // 3. **Associar Tarefas aos Usuários:**
// //     - Modifique a função **`createTask`** para receber também o objeto de usuário como argumento.
// //     - Ao criar uma nova tarefa, adicione-a à lista de tarefas do usuário.

// // 4. **Execução:**
// //     - Crie pelo menos dois usuários diferentes utilizando a função **`createUser`**.
// //     - Realize o login com um usuário utilizando a função **`login`**.
// //     - Execute operações de criar, listar, atualizar e excluir tarefas utilizando o usuário logado.
// //     - Verifique se as operações são executadas apenas nas tarefas do usuário logado.

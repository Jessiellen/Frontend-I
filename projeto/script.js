import TodoModel from "./TodoModel.js";

window.onload = async () => {
  // if ('serviceWorker' in navigator) {
  //   window.addEventListener('load', () => {
  //     navigator.serviceWorker.register('/service-worker.js')
  //       .then(registration => {
  //         console.log('Service Worker registrado com sucesso: ', registration);
  //       })
  //       .catch(error => {
  //         console.log('Falha ao registrar o Service Worker: ', error);
  //       });
  //   });
  // }

  const tasksContainer = document.querySelector("#tasks");
  const itemsContainer = document.querySelector("#items");   
  let currentTaskIndex;

  const model = new TodoModel();

  const listsContainer = document.querySelector("#lists-container");
  const lists = document.querySelectorAll("ul");
  lists.forEach(ul => {
    ul.style.height = `${listsContainer.offsetHeight}px`;
  });
  
  const todoHeader = document.querySelector("todo-header");
  todoHeader.state = "tasks";
    
  const handleHeaderClick = () => {
    listsContainer.style.transform = "translateX(0)";
    todoHeader.state = "tasks";
    buildTasksList(model.getTasks());
  };
  
  const handleHeaderKeydown = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      handleHeaderClick();
    }
  };

  todoHeader.addEventListener("click", handleHeaderClick);
  todoHeader.addEventListener("keydown", handleHeaderKeydown);

  // MODAL
  const todoModal = document.querySelector("todo-modal");
  todoModal.addEventListener("confirm", (ev) => {
    if (todoHeader.getAttribute("state") === "tasks") {
      model.addTask(ev.detail.value);
      buildTasksList(model.getTasks());
    } else {
      console.log(currentTaskIndex);
      model.addItem(currentTaskIndex, ev.detail.value);
      buildItemsList(model.getItems(currentTaskIndex));
    }
  });

  // FOOTER
  const footer = document.querySelector("footer");
  footer.onclick = () => {
    todoModal.show(todoHeader.getAttribute("state"));
  };

  const buildTasksList = (tasks) => {
    const tasksList = document.querySelector("#tasks");
    tasksList.innerHTML = "";

    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      const taskItem = new TaskItem();
      taskItem.addEventListener("clicked", () => {
        listsContainer.style.transform = "translateX(-100%)";
        todoHeader.state = "items";
        todoHeader.taskName = task.title;
        buildItemsList(task.items);
        currentTaskIndex = index;
      });
      taskItem.addEventListener("delete", () => {
        model.deleteTask(index);
        buildTasksList(model.getTasks());
      });
      taskItem.title = task.title;

      li.append(taskItem);
      tasksList.append(li);
    });
  };

  const buildItemsList = (items) => {
    const checkItemsList = document.querySelector("#items");
    checkItemsList.innerHTML = "";
    items.forEach((item, index) => {
      const li = document.createElement("li");
      const checkItem = new CheckItem();
      checkItem.addEventListener("checked", (ev) => {
        model.updateItem(currentTaskIndex, index, ev.detail.checked);
      });
      checkItem.addEventListener("delete", () => {
        model.deleteItem(currentTaskIndex, index);
        buildItemsList(model.getItems(currentTaskIndex));
      });
      checkItem.title = item.title;
      checkItem.checked = item.checked;

      li.append(checkItem);
      checkItemsList.append(li);
    });
  };

  buildTasksList(model.getTasks());
};

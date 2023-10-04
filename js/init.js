fetch("/task-manager/json/tasks.json")
  .then((server_response) => {
    return server_response.json();
  })
  .then((response) => {
    response.task.forEach((task) => {
      if (task.status === "trash") {
        if (!trashed) {
          trash.style.display = "block";
          trash.innerHTML += `
            <div class="todo" id="todo-${task.id}">
              <p class="time">${task.time}</p>
              <p class="task">${task.title}</p>
            </div>
          `;
        }
        trashed = true;
      } else if (task.status === "finish") {
        todo_list.innerHTML += `
            <div class="todo finish" id="todo-${task.id}">
              <p class="time">${task.time}</p>
              <p class="task">${task.title}</p>
              <img src="icons/badge-check.svg" />
            </div>
          `;
      } else {
        todo_list.innerHTML += `
          <div class="todo" onclick="show_todo_menu(this)" id="todo-${task.id}">
            <p class="time">${task.time}</p>
            <p class="task">${task.title}</p>
          </div>
        `;
      }
    });
  });

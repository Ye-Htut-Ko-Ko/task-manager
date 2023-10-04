function show_todo_menu(ele) {
  console.log(ele.id);
  todo_menu.style.display = "flex";
  todo_time_edit.value = ele.children[0].innerText;
  todo_title_edit.value = ele.children[1].innerText;
}

function open_add_todo_box() {
  add_todo_box.style.display = "flex";
}
function close_menu(ele) {
  ele.parentNode.parentNode.style.display = "none";
}

add_todo_form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (todo_time_input.value && todo_title_input.value) {
    fetch("../todo/php/addNewTodo.php", {
      body: new FormData(add_todo_form),
      method: "post",
    })
      .then((server_response) => {
        return server_response.json();
      })
      .then((response) => {
        console.log(response);
        todo_list.innerHTML += `
        <div class="todo" onclick="todo_menu(this)" id="todo-${response.id}">
          <p class="time">${todo_time_input.value}</p>
          <p class="task">${todo_title_input.value}</p>
        </div>
        `;
        add_todo_box.style.display = "none";
        todo_time_input.value = "";
        todo_title_input.value = "";
        todo_detail_input.value = "";
      });
  } else {
    show_err("please fill all the input below");
  }
});

document.documentElement.style.setProperty(
  "--height",
  `${window.innerHeight - 90}px`
);

let black_cover = document.getElementById("black-cover");
let todo_list = document.getElementById("todo-list");
let add_todo_box = document.getElementById("add-new-todo");
let add_todo_form = document.getElementById("add-todo-form");
let todo_time_input = document.getElementById("task-time");
let todo_title_input = document.getElementById("task-title");
let todo_detail_input = document.getElementById("task-detail");
let edit_todo_form = document.getElementById("edit-todo-form");
let todo_time_edit = document.getElementById("task-time-edit");
let todo_title_edit = document.getElementById("task-title-edit");
let todo_detail_edit = document.getElementById("task-detail-edit");
let todo_menu = document.getElementById("todo-menu");
let todo_trash = document.getElementById("trash");
let menu_icons = document.querySelectorAll(".menu img");
let todo_finish_btn = document.querySelector("#todo-finish-btn");

let err = document.getElementById("err");

let trashed = false;
let current_page = "task";

function show_err(msg) {
  err.innerText = msg;
  err.style.display = "block";
  setTimeout(() => {
    err.style.display = "none";
  }, 3000);
}
function hide_err() {
  err.style.display = "none";
}

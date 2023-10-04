function change_page(ele) {
  menu_icons.forEach((element) => {
    element.classList.remove("active");
  });
  ele.classList.add("active");
  current_page = ele.id.substring(0, ele.id.length - 5);
  console.log(current_page);
}

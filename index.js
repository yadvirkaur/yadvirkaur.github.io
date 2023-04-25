function toggleMenu() {
var menuList = document.getElementById("menuList");
var menuIcon = document.querySelector(".menu_bar_icon");
var listItems = document.querySelectorAll(".menu_bar_list > .list");

menuList.classList.toggle("show");

if (menuIcon.offsetWidth === 0) {
  listItems.forEach(function(item) {
    item.removeAttribute("onclick");
  });
}
else{
    listItems.forEach(function(item) {
        item.addEventListener("click", toggleMenu);
      });
}
}
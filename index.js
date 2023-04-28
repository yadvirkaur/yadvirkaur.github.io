function toggleMenu() {
  const menuList = document.getElementById('menuList');
  const menuIcon = document.querySelector('.menu_bar_icon');
  const listItems = document.querySelectorAll('.menu_bar_list > .list>a');

  menuList.classList.toggle('show');

  if (menuIcon.offsetWidth === 0) {
    listItems.forEach((item) => {
      item.removeAttribute('onclick');
    });
  } else {
    listItems.forEach((item) => {
      item.addEventListener('click', toggleMenu);
    });
  }
}

const menuIconButton = document.querySelector("[data-menu-icon-btn]")
const sidebar = document.querySelector("[data-navbar]")

menuIconButton.addEventListener("click", () => {
  sidebar.classList.toggle("open")
})


const menuIconButton = document.querySelector("[data-menu-icon-btn]")
const sidebar = document.querySelector("[data-navbar]")

menuIconButton.addEventListener("click", () => {
  sidebar.classList.toggle("open")
})


/*
let eventButton= document.getElementById("event_button")
let bellIcon=document.getElementById("bell_icon")
function notify() {
  eventButton.classList.toggle("btncolor")
  bellIcon.classList.toggle("bell")
}

*/
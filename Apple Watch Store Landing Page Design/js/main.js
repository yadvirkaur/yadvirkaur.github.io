const menubarButton = document.querySelector("[data-menu_bar]")
const menubarList = document.querySelector("[data-menu_bar_list]")

menubarButton.addEventListener("click", () => {
    menubarList.classList.toggle("open")
})

const search = document.querySelector("[data-search]")
const input = document.querySelector("[data-input]")
const searchbar = document.querySelector("[data-searchbar]")

search.addEventListener("click", () => {
    input.classList.toggle("open")
    searchbar.classList.toggle("expand")
    menubarList.classList.toggle("hide")
})


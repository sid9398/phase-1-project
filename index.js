document.addEventListener("DOMContentLoaded", () => fetchData())

function fetchData() {
    fetch('https://api.tvmaze.com/shows')
    .then((resp) => resp.json())
    .then((data) => console.log(data))
}

const searchInputWrapper = document.querySelector(".search-input-wrapper")
const searchInput = document.querySelector(".search-input input")
const searchIcon = document.querySelector(".search-icon i")
searchIcon.addEventListener('click', () => {
    searchIcon.parentElement.classList.add("change")
    searchInputWrapper.classList.add("change")

    setTimeout(() => {
        searchInput.focus()
    }, 1000)
})


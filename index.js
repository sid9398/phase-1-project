document.addEventListener("DOMContentLoaded", () => fetchData())

function fetchData() {
    fetch('https://api.tvmaze.com/shows')
    .then((resp) => resp.json())
    .then((data) => console.log(data))
}

const searchIcon = document.querySelector(".search-icon i")
searchIcon.addEventListener('click', () => {
    searchIcon.parentElement.classList.add("change")
})
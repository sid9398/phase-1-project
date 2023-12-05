function fetchData() {
    fetch('https://api.tvmaze.com/shows')
    .then((resp) => resp.json())
    .then((json) => console.log(json))
}

document.addEventListener("DOMContentLoaded", () => fetchData())


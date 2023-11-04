document.addEventListener("DOMContentLoaded", () => fetchData())

function fetchData() {
    fetch('https://api.tvmaze.com/shows')
    .then((resp) => resp.json())
    .then((data) => console.log(data))
}


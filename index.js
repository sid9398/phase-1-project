const showsURL = 'https://api.tvmaze.com/shows'
const showGenreEl = document.getElementById('show-genres')

fetch(showsURL)
    .then(response => response.json())
    .then(responseJson => {
        for (let {genres} of responseJson){
            console.log(genres)
        }
    })


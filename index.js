const showsURL = 'https://api.tvmaze.com/shows'
const showNameEl = document.getElementById('show-name')

fetch(showsURL)
    .then(response => response.json())
    .then(responseJson => {
        for (let {name} of responseJson){
            console.log(name)
            const showName = document.createElement('p')
            showName.innerText = name
            showNameEl.append(showName)
        }
    })


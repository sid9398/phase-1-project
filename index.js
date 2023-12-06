const showsURL = 'https://api.tvmaze.com/shows'
const showNameEl = document.getElementById('show-name')
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

fetch(showsURL)
    .then(response => response.json())
    .then(responseJson => {
        for (let {name} of responseJson){
            const showName = document.createElement('p')
            showName.innerText = name
            showNameEl.append(showName)
        }
    })

// add event listener to the button
searchButton.addEventListener('click', function() {
  // get the search input value
  const searchTerm = searchInput.value;
  // do something with the search term (e.g. redirect to a search results page)
  console.log(`Searching for "${searchTerm}"...`)
});

// add event listener to the input (if you want to trigger the search on Enter keypress)
searchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    // simulate a button click to trigger the search
    searchButton.click();
  }
})


const showsURL = 'https://api.tvmaze.com/shows'
const searchInput = document.getElementById('searchInput')
const genreButton = document.getElementById('genres')

fetch(showsURL)
    .then(response => response.json())
    .then(data => console.log(data))

// add event listener to the input
searchInput.addEventListener('input', function() {
  // get the search input value
  const searchTerm = this.value
  //filter the data
  const filteredData = tvShows.filter(item => item.name.includes(searchTerm))
  //display the filtered data
  const resultsList = document.getElementById("results")
  resultsList.innerHTML = ""
  filteredData.forEach(item => {
    const resultItem = document.createElement("li")
    resultItem.textContent = item.name
    resultsList.appendChild(resultItem)
  })
  })

  genreButton.addEventListener('click', function() {
    const differentFilter = tvShows.filter(item => item.genres)
    const differentResults = document.getElementById("genreList")
    })
  




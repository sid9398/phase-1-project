const showsURL = 'https://api.tvmaze.com/shows'
const searchInput = document.getElementById('searchInput');

fetch(showsURL)
    .then(response => response.json())
    .then(data => console.log(data))

// add event listener to the button
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




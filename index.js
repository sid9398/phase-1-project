document.addEventListener("DOMContentLoaded", () => fetchData())

function fetchData() {
    fetch('https://api.tvmaze.com/shows')
    .then((resp) => resp.json())
    .then((data) => console.log(data))
}

// get elements by their ID
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// add event listener to the button
searchButton.addEventListener('click', function() {
  // get the search input value
  const searchTerm = searchInput.value;
  // do something with the search term (e.g. redirect to a search results page)
  console.log(`Searching for "${searchTerm}"...`);
});

// add event listener to the input (if you want to trigger the search on Enter keypress)
searchInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    // simulate a button click to trigger the search
    searchButton.click();
  }
});
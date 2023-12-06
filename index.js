const showsURL = 'https://api.tvmaze.com/shows'
const showNameEl = document.getElementById('show-name')
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

fetch(showsURL)
    .then(response => response.json())
    .then(data => console.log(data))
    //.then(responseJson => {
      //  for (let {name} of responseJson){
        //    const showName = document.createElement('p')
          //  showName.innerText = name
            //showNameEl.append(showName)
        //}
    //})


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
    
  });

// add event listener to the input (if you want to trigger the search on Enter keypress)
searchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    // simulate a button click to trigger the search
    searchButton.click();
  }
})




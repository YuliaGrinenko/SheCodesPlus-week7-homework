function searchCity(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input").value;
  let city = document.querySelector("#current-city");
  city.innerHTML = searchInputElement;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchCity);

//"df336e1036o064a2a04903f20318tb6d";

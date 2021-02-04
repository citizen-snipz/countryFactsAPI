//Event listener for specific country search
const searchBtn = document.querySelector(".countrySearch");
searchBtn.addEventListener("click", getFetch);

//event listener for random country button
const randomBtn = document.querySelector(".randomBtn");
randomBtn.addEventListener("click", fetchRandom);

//populates selected country data onto a card
function getCountryData(country) {
  //if a country has multiple languages, it will loop through the array of languages and display them as list items
  let langs = "";
  for (let i = 0; i < country.languages.length; i++) {
    langs += `<li> ${country.languages[i].name} </li>`;
  }
  return `
			<div class="card">
				<h2>${country.name}</h2>
        <img src="${country.flag}" alt="Flag of ${country.name}">
        <h3 class="ingredients"><span class=title">Capital:</span> ${
          country.capital
        }</h3>
        <h3 class="location">Located in ${country.subregion}</h3>
        <h4><span class=title"> Main language(s):</span> ${langs}</h4>
        <h4><span class=title">Population:</span> ${country.population}</h4>
        <h4><span class=title">Currency:</span> ${
          country.currencies[0].name
        } ( ${country.currencies[0].symbol || "data not available"} )</h4>
      </div>
      `;
}

//fetch function for specific country search
function getFetch() {
  const name = document.querySelector("input").value;
  const url = `https://restcountries.eu/rest/v2/name/${name}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      document.querySelector(".resultsBody").innerHTML = "";
      document
        .querySelector(".resultsBody")
        .insertAdjacentHTML("afterbegin", getCountryData(data[0]));
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

//returns random result from array of country object when "Get Random Country" button is clicked.
function fetchRandom() {
  const random = Math.floor(Math.random() * 250) + 1;
  const url = `https://restcountries.eu/rest/v2/all`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      document.querySelector(".resultsBody").innerHTML = "";
      document
        .querySelector(".resultsBody")
        .insertAdjacentHTML("afterbegin", getCountryData(data[random]));
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

//Currency converter API

//Event listener for specific country search
const searchConvert = document.querySelector(".countrySearch");
searchBtn.addEventListener("click", fetchCurrencyConversion);

//event listener for random country button
const randomConvert = document.querySelector(".randomBtn");
randomBtn.addEventListener("click", fetchCurrencyConversion);

function fetchCurrencyConversion() {
  const currCode = getCountryData(data.currencies[0].code);
  const currUrl =
    "http://api.currencylayer.com/live?access_key=2f2e790cf2d7285d39d0cedfc19813bb&source=USD&quotes=${currCode}";

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      // document.querySelector(".resultsBody").innerHTML = "";
      // document
      //   .querySelector(".currencyConverter")
      //   .insertAdjacentHTML("afterbegin", currCode);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
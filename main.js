import {
  API_KEY,
  BASE_URL,
  IMG_URL,
  language,
} from './api.js'

function getContent() {
  fetch(BASE_URL + getRandomInt(62, 616040).toString() + "?" + API_KEY + language)
    .then(function (response){
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      document.getElementById("poster").src = IMG_URL + data.poster_path
      document.getElementById("title").innerHTML = data.title
      document.getElementById("overview").innerHTML = data.overview
    })
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const element = document.getElementById("btn");
element.addEventListener("click", getContent);

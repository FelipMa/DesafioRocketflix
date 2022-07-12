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
      if (data.overview == "") {
        document.getElementById("overview").innerHTML = "Sinopse não disponível"
      }
      if (IMG_URL + data.poster_path == "https://image.tmdb.org/t/p/original/null") {
        document.getElementById("poster").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Imagem_n%C3%A3o_dispon%C3%ADvel.svg/300px-Imagem_n%C3%A3o_dispon%C3%ADvel.svg.png"
      }
      if (data.success == false) {
        document.getElementById("poster").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Imagem_n%C3%A3o_dispon%C3%ADvel.svg/300px-Imagem_n%C3%A3o_dispon%C3%ADvel.svg.png"
        document.getElementById("title").innerHTML = "Filme não encontrado"
        document.getElementById("overview").innerHTML = "Tente novamente"
      }
    })
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const element = document.getElementById("btn");
element.addEventListener("click", getContent);

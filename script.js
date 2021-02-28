const h1 = document.querySelector('h1')
const mainContainer = document.querySelector('.main-container')

const baseURL = 'https://swapi.dev/api/'

window.addEventListener('DOMContentLoaded', (e) => {
  fetch(baseURL)
    .then((res) => res.json())
    .then((data) => console.log(data))
})

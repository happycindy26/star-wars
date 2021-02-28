const h1 = document.querySelector('h1')
const siteNav = document.querySelector('.site-nav')
const mainContainer = document.querySelector('.main-container')

const baseURL = 'https://swapi.dev/api/'

window.addEventListener('DOMContentLoaded', (e) => {
  fetch(baseURL)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)
      for (const section in data) {
        // console.log(`${section} : ${data[section]}`)
        const sectionBtn = document.createElement('button')
        sectionBtn.classList.add('section-button')
        sectionBtn.textContent = `${section}`
        siteNav.append(sectionBtn)
        sectionBtn.sectionURL = data[section]
        sectionBtn.addEventListener('click', getContent)
      }
    })
})

const getContent = (e) => {
  // console.log(e.target)
  const btn = e.target
  // console.log(btn.sectionURL)
  getJSON(btn.sectionURL)
}

const getJSON = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)
      displaySection(data)
    })
}

const displaySection = (data) => {
  console.log(data)
  mainContainer.innerHTML = ''
  data.results.forEach((thing) => {
    const div = document.createElement('div')
    div.classList.add('section-item')
    div.textContent = thing.name || thing.title

    div.sectionURL = thing.url
    div.addEventListener('click', displayItem)

    mainContainer.append(div)
    console.log(thing.name)
  })
}

const displayItem = () => {
  console.log('hello item!')
}

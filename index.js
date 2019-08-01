document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')

  let joke;
   

  function fetchJoke(){
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(jokeData => joke = jokeData.joke)
  }

  form.addEventListener('submit', (event) => {
     event.preventDefault()
     const username = document.getElementById('name-input').value
     const jokeList = document.getElementById('joke-list')
     const newJokeLi = document.createElement('li')

    if(username === "") return;
    fetchJoke()
    newJokeLi.innerHTML = `
    <span class="username">${username} says:</span> ${joke}
    `
    jokeList.appendChild(newJokeLi)

  })
})

const aplicacion = document.querySelector('.container')
const getURL = new URLSearchParams(window.location.search)
const url = 'https://jsonplaceholder.typicode.com/users'

id = getURL.get('id')
console.log(`${url}/${id}`)

fetch(`${url}/${id}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const name = document.createElement('p')
        name.innerHTML = data.name
        const email = document.createElement('p')
        email.innerHTML = data.email
        aplicacion.appendChild(name)
        aplicacion.appendChild(email)
    })
    .catch(err => console.log(err))
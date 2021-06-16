const aplication = document.querySelector('.app')
const API_URL = 'https://jsonplaceholder.typicode.com'

const HTMLResponse = document.querySelector('#app');
const ul = document.createElement("ul");

fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((data) => {
        data.forEach(usuario => {
            console.log(usuario.name)
            const li = document.createElement('li')
            li.innerHTML = usuario.name
            aplication.appendChild(li)

        });
    })


/*

fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((data) => {
        data.forEach((user) => {
            console.log(usuario.name)
            let elem = document.createElement("li");
            elem.appendChild(
                document.createTextNode(`${user.name} - ${user.email}`)
            );
            ul.appendChild(elem);

        });

        HTMLResponse.appendChild(ul);
    })



 un metodo

fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((users) => {
        const tpl = users.map((user) => `<li>${user.name} - ${user.email}</li>`);
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
    });

/* Metodo Viejo
const xhr = new XMLHttpRequest();
/*


function onRequestHandler() {
    if (this.readyState === 4 && this.status === 200) {
        //0 UNSET, no se ha llamado al metodo open
        //1 OPENED, se ha llamado al metodo open
        //2 HEADERS_RECEIVED, se esta llamando el metodo sent()
        //3 LOADING, esta cargando, esta recibiendo respuesta
        //4 DONE, se ha completado la operacion
        //console.log(this.response);
        const data = JSON.parse(this.response);
        //console.log(data)
        const HTMLResponse = document.querySelector('#app');

        const template = data.map((user) => `<li>${user.name} 📧 ${user.email}</li>`);
        HTMLResponse.innerHTML = `<ul>${template}</ul>`

    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${API_URL}/users`);
xhr.send();
*/
import '../css/componentes.css';

import {
    getImagen
} from './api';

let ul = document.querySelector("#lista");
let agregar = document.querySelector("#add");
const modoNocturno = document.querySelector('#modoNocturno');
const root = document.querySelector('#contenedorGif');
const h1 = document.querySelector('#h1');




agregar.addEventListener("click", () => {
    getImagen().then((url) => {
        const img = document.createElement('img');
        console.log(url);
        img.src = url;
        const li = document.createElement("li");
        li.appendChild(img);
        ul.appendChild(li)
        // contador++;
        // const enlace = document.createElement("a");

        // const li = document.createElement("li");
        // localStorage.setItem("guardarUrl", url);
        // const guardarGif = localStorage.getItem("guardarUrl");
        // enlace.innerHTML = guardarGif;
        // enlace.innerText = `Gif ${contador} `;
        // li.appendChild(enlace);
        // enlace.href = url;
        // ul.appendChild(li);
    });
});

// modoNocturno.addEventListener('click', () => {
//     modoNocturno.classList.toggle('translate');
//     h1.classList.toggle('h1');
//     root.classList.toggle('modoNocturno');

// })

// https://developers.giphy.com/dashboard/  // API
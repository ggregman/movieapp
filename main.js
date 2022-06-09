import {BASE_URL} from "./config.js"

const API_KEY = "f6e1faa9"
/*const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&`;*/

const API_URL = BASE_URL + API_KEY;

const PROVA_URL = API_URL + '&s=marvel&type=movie';

export const CONTENT_TYPE = {
    MOVIE: "movie",
    SERIES: "series",
    EPISODE: "episode",

}
/*
const getMovies = (s, type) => {
    const url = BASE_URL + `s=${s}&type=${type}`;
    fetch(url)
        .then((response) => response.json())
        .then((results) => {
            const items = results.Search
            console.log(results)
            viewItems(results.Search)
        })
};*/

export const getMovies = async (s, type) => {
    const url = BASE_URL + `s=${s}&type=${type}`;
    const response = await fetch(url);
    const result = await response.json();
    const items = result.Search;
    viewItems(items);
};

export const getSeries = async (s, type) => {
    const url = BASE_URL + `s=${s}&type=${type}`;
    const response = await fetch(url);
    const result = await response.json();
    const items = result.Search;
    viewItems2(items);
};

const viewItems = (items) => {

    let indice = 1;

    items.map((item) => {
        //Creo il movie all'interno del DOM
        createMovie(item, indice);
        indice++;
    });
};

const createMovie = (movie, i) => {

    const div = document.getElementById(`movie${i}`);
    const img = document.getElementById(`img${i}`);
 /* const anno = document.getElementById(`film-anno-${i}`);  */
    const titolo = document.getElementById(`movie-info${i}`);

    const h3 = document.createElement("h3");
    const node = document.createTextNode(movie.Title);
    h3.appendChild(node);
    div.replaceChild(h3, titolo);

 /*   const para = document.createElement("p");
    const node2 = document.createTextNode(movie.Year);
    para.appendChild(node2);
    div.replaceChild(para, anno); */

    img.src = `${movie.Poster}`;

};

const viewItems2 = (items) => {

    let indice = 1;

    items.map((item) => {
        //Creo il movie all'interno del DOM
        createSerie(item, indice);
        indice++;
    });
};

const createSerie = (serie, i) => {

    const div = document.getElementById(`serie${i}`);
    const img = document.getElementById(`imgs${i}`);
 /* const anno = document.getElementById(`film-anno-${i}`);  */
    const titolo = document.getElementById(`serie-info${i}`);

    const h3 = document.createElement("h3");
    const node = document.createTextNode(serie.Title);
    h3.appendChild(node);
    div.replaceChild(h3, titolo);

 /*   const para = document.createElement("p");
    const node2 = document.createTextNode(movie.Year);
    para.appendChild(node2);
    div.replaceChild(para, anno); */

    img.src = `${serie.Poster}`;
   

};

const getMovieDetails = async (codice) => {

    const url = BASE_URL + `i=${codice}`;
    const response = await fetch(url);
    const result = await response.json();
    const items = result.Search;

}   

const createMovieDetails = (movie, i) => {
    const trama = document.getElementById(`movie-riassunto${i}`);
    const p = document.createElement("p");
    const node = document.createTextNode(movie.Plot);
    p.appendChild(node)
    trama.replaceChild(p, trama);
}


/* w3 School

const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);  */




/* FETCH */

/*

const apiList = (s) => {
    const url = API_URL + `s=${s}`;
    fetch(url)
        .then((response) => response.json())
        .then((results) => {
            viewItems(results);
        })
};

const viewItems = (items) => {
    //Mi posiziono dove voglio mettere l'elenco dei movies
    const element = document.getElementsByClassName("box");
    element.innerHTML = '';
    //Cicla l'array
    items.map((item) => {
        const { Title, Poster, Runtime, Genre } = item;
        //Creo il movie all'interno del DOM
        const elementoMovie = document.createElement('div');
        elementoMovie.classList.add('box');
        elementoMovie.innerHTML = `
        <img src="${item.Poster}" alt="${item.Title}">
            </div>
            <h3>${item.Title}</h3>
            <span>${item.Runtime} | ${item.Genre}
            }</span>
        `
        element.appendChild(elementoMovie);
    });
};

/**/

form.addEventListener('submit', testo => {
    testo.preventDefault();
    const cercaMovie = testo.value;
    if (cercaMovie) {
        apiList(API_URL + cercaMovie)
    } else {
        console.log(apiList("ciao"))
    }

})


let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 100)
});

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Slider (preso su internet: https://swiperjs.com/demos)
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



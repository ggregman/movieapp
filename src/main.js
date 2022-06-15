import { BASE_URL } from "./config.js"

const API_KEY = "f6e1faa9"

const API_URL = BASE_URL + API_KEY;

// const PROVA_URL = API_URL + '&s=marvel&type=movie';

export const CONTENT_TYPE = {
    MOVIE: "movie",
    SERIES: "series",
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
};
*/

// Funzione che mi fa la fetch dei film 
export const getMovies = async (s, type) => {
    const url = BASE_URL + `s=${s}&type=${type}`;  // ("Marvel", "CONTENT_TYPE.MOVIE")
    const response = await fetch(url);
    const result = await response.json();
    const items = result.Search;
    viewItems(items);
};

const viewItems = (items) => {

    let indice = 1;

    // Ciclo nell'array
    items.map((item) => {
        // per ogni item nell'array chiamo la funzione che mi crea le card
        createMovie(item, indice);
        indice++;
    });
};

// Dichiaro la funzione che mi crea la card personalizzata (con parametro di ricerca -s ho accesso solo a: titolo, tipo, codice, poster, anno)
const createMovie = (movie, indice) => {

    // Scelgo e creo una variabile in cui voglio posizionarmi
    const div = document.getElementById(`movie${indice}`);

    // Scelgo più precisamente cosa voglio modificare
    const titolo = document.getElementById(`movie-info${indice}`); // es. movie-info1 (titolo della prima card movie)

    // Creo un elemento vuoto
    const h3 = document.createElement("h3");

    // Salvo in una variabile il contenuto che mi serve
    const node = document.createTextNode(movie.Title);

    // "Appendo" all'elemento vuoto il contenuto appena salvato nella variabile
    h3.appendChild(node);

    // "Rimpiazzo" all'interno della posizione che ho scelto mettendo come parametri "nuovo","vecchio"
    div.replaceChild(h3, titolo);

    const img = document.getElementById(`img${indice}`);
    img.src = `${movie.Poster}`;


    // Dichiaro la funzione che mi permette di accedere a più informazione come: genere, durata, trama etc.
    const createMovieDetails = (item, indice) => {

        const div = document.getElementById(`movie-info${indice}`);
        const trama = document.getElementById(`movie-riassunto${indice}`);
        const genere = document.getElementById(`movie-genere${indice}`);
        const durata = document.getElementById(`movie-durata${indice}`);
        const anno = document.getElementById(`movie-anno${indice}`);

        const p1 = document.createElement('p');
        const node1 = document.createTextNode(item.Plot);
        p1.appendChild(node1);
        div.replaceChild(p1, trama);

        const p2 = document.createElement('p');
        const node2 = document.createTextNode(item.Genre);
        p2.appendChild(node2);
        div.replaceChild(p2, genere);

        const p3 = document.createElement('p');
        const node3 = document.createTextNode(`Runtime: ${item.Runtime}`);
        p3.appendChild(node3);
        div.replaceChild(p3, durata);

        const p4 = document.createElement('p');
        const node4 = document.createTextNode(`Year: ${item.Year}`);
        p4.appendChild(node4);
        div.replaceChild(p4, anno);

    }

    // Funzione che mi fa la fetch del singolo movie tramite "imdbID"
    const viewMovieDetails = (codice) => {

        const url1 = BASE_URL + `i=${codice}&plot=short`;
        fetch(url1)
            .then((response1) => response1.json())
            .then((results1) => {
                const item = results1;

                createMovieDetails(item, indice);

            });
    };

    (viewMovieDetails(movie.imdbID));

};

/* 13/06/2022 14:28

const viewMovieDetails = async (codice) => {
    
    const url = BASE_URL + `i=${codice}`;
    const response = await fetch(url);
    const result = await response.json();
    const item = result.Search;
    createMovieDetails(item, indice); 
    
}

const createMovieDetails = (item, i) => {
    let indice = 1;

    const div = document.getElementById(`movie${i}`);
    const trama = document.getElementById(`movie-riassunto${i}`);

    const p = document.createElement('p');
    const node = document.createTextNode(item.Plot);
    p.appendChild(node);
    div.replaceChild(p, trama);

    indice ++;
    
}

*/


// Funzione che svolge lo stesso obiettivo di getMovies sopra
export const getSeries = async (s, type) => {
    const url = BASE_URL + `s=${s}&type=${type}`;
    const response = await fetch(url);
    const result = await response.json();
    const items = result.Search;
    viewItems2(items);
};

const viewItems2 = (items) => {

    let indice = 1;

    // Ciclo nell'array
    items.map((item) => {
        // per ogni item nell'array chiamo la funzione che mi crea le card
        createSerie(item, indice);
        indice++;
    });
};

// Dichiaro la funzione che mi crea la card personalizzata (con parametro di ricerca -s ho accesso solo a: titolo, tipo, codice, poster, anno)
const createSerie = (serie, indice) => {

    // Scelgo e creo una variabile in cui voglio posizionarmi
    const div = document.getElementById(`serie${indice}`);

    // Scelgo più precisamente cosa voglio modificare
    const titolo = document.getElementById(`serie-info${indice}`); // es. serie-info1 (titolo della prima card serie)

    // Creo un elemento vuoto
    const h3 = document.createElement("h3");

    // Salvo in una variabile il contenuto che mi serve
    const node = document.createTextNode(serie.Title);

    // "Appendo" all'elemento vuoto il contenuto appena salvato nella variabile
    h3.appendChild(node);

    // "Rimpiazzo" all'interno della posizione che ho scelto mettendo come parametri "nuovo","vecchio"
    div.replaceChild(h3, titolo);

    const img = document.getElementById(`imgs${indice}`);
    img.src = `${serie.Poster}`;


    // Dichiaro la funzione che mi permette di accedere a più informazione come: genere, durata, trama etc.
    const createSerieDetails = (item, indice) => {

        const div = document.getElementById(`serie-info${indice}`);
        const trama = document.getElementById(`serie-riassunto${indice}`);
        const genere = document.getElementById(`serie-genere${indice}`);
        const durata = document.getElementById(`serie-durata${indice}`);
        const anno = document.getElementById(`serie-anno${indice}`);

        const p1 = document.createElement('p');
        const node1 = document.createTextNode(item.Plot);
        p1.appendChild(node1);
        div.replaceChild(p1, trama);

        const p2 = document.createElement('p');
        const node2 = document.createTextNode(item.Genre);
        p2.appendChild(node2);
        div.replaceChild(p2, genere);

        const p3 = document.createElement('p');
        const node3 = document.createTextNode(`Runtime: ${item.Runtime}`);
        p3.appendChild(node3);
        div.replaceChild(p3, durata);

        const p4 = document.createElement('p');
        const node4 = document.createTextNode(`Year: ${item.Year}`);
        p4.appendChild(node4);
        div.replaceChild(p4, anno);

    }

    // Funzione che mi fa la fetch del singolo serie tramite "imdbID"
    const viewSerieDetails = (codice) => {

        const url1 = BASE_URL + `i=${codice}&plot=short`;
        fetch(url1)
            .then((response1) => response1.json())
            .then((results1) => {
                const item = results1;

                createSerieDetails(item, indice);

            });
    };

    (viewSerieDetails(serie.imdbID));

};

/*

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
    const titolo = document.getElementById(`serie-info${i}`);

    const h3 = document.createElement("h3");
    const node = document.createTextNode(serie.Title);
    h3.appendChild(node);
    div.replaceChild(h3, titolo);

    img.src = `${serie.Poster}`;
};

*/

/*

const createMovieDetails = (movie) => {
    const response = await fetch(movie);
    const result = await response.json();

    return movie.Plot;
    
}
*/

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
/*
form.addEventListener('submit', testo => {
    testo.preventDefault();
    const cercaMovie = testo.value;
    if (cercaMovie) {
        getMovies(cercaMovie);
        getSeries(cercaMovie);
    } else {
        console.log("ciao")
    }

})*/

/* Random */

// Funzione che mi fa la fetch random 

export const getRandom = (parametroRandom) => {

    const createRandom = (item) => {

        // Scelgo e creo una variabile in cui voglio posizionarmi
        const div = document.getElementById(`random-movie`);

        const div2 = document.getElementById(`random-info`);

        // Scelgo più precisamente cosa voglio modificare
        const titolo = document.getElementById(`random-titolo`);

        // Creo un elemento vuoto
        const h3 = document.createElement("h3");

        // Salvo in una variabile il contenuto che mi serve
        const node = document.createTextNode(item.Title);

        // "Appendo" all'elemento vuoto il contenuto appena salvato nella variabile
        h3.appendChild(node);

        // "Rimpiazzo" all'interno della posizione che ho scelto mettendo come parametri "nuovo","vecchio"
        div.replaceChild(h3, titolo);

        const img = document.getElementById(`imgr`);
        img.src = `${item.Poster}`;

        const trama = document.getElementById(`random-riassunto`);
        const genere = document.getElementById(`random-genere`);
        const durata = document.getElementById(`random-durata`);
        const anno = document.getElementById(`random-anno`);

        const p1 = document.createElement('p');
        const node1 = document.createTextNode(item.Plot);
        p1.appendChild(node1);
        div2.replaceChild(p1, trama);

        const p2 = document.createElement('p');
        const node2 = document.createTextNode(item.Genre);
        p2.appendChild(node2);
        div2.replaceChild(p2, genere);

        const p3 = document.createElement('p');
        const node3 = document.createTextNode(`Runtime: ${item.Runtime}`);
        p3.appendChild(node3);
        div2.replaceChild(p3, durata);

        const p4 = document.createElement('p');
        const node4 = document.createTextNode(`Year: ${item.Year}`);
        p4.appendChild(node4);
        div2.replaceChild(p4, anno);

    };

    const url2 = BASE_URL + `t=${parametroRandom}&plot=short`;
    fetch(url2)
        .then((response2) => response2.json())
        .then((results2) => {
            let item = results2;

            createRandom(item);

        });
}



export const generaParametro = () => {

    let numeroRandom;
    let parametroRandom;

    const arrayParametri = [
        "scarface",
        "Titanic",
        "E.t.",
        "Lego",
        "Terminator%202",
        "The lion king",
        "The Godfather",
        "jurassic park",
        "harry potter",
        "indiana jones",
        "Pirates of the Caribbean",
        "fight club",
        "pulp fiction",
        "forrest gump",
        "shrek",
        "transformers",
        "back to the future",
        "The matrix",
        "superman",
        "Batman",
        "The Wolf of Wall Street",
        "Impossible",
        "Star Wars",
        "Star Trek",
        "Alien",
        "Spider-man",
        "king",
        "dog",
        "cat",
        "top Gun",
        "The truman show",
        "Dragon Ball",
    ];

    numeroRandom = Math.floor((Math.random() * arrayParametri.length));
    parametroRandom = arrayParametri[numeroRandom];
    console.log(parametroRandom);

    getRandom(parametroRandom);

}

const button = document.querySelector('#btn');
button.addEventListener('click', generaParametro());



/* -------------------------------------------------------- */

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







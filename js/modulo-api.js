/*export const pippo = "https://www.omdbapi.com/?apikey=f6e1faa9&s=terminator";

export const somma = (param1,param2) => param1 + param2;
export const divisione = (param1,param2) => param1 / param2;*/

/*
export const URL_LIST_AVENGERS = "s=avengers";
export const URL_LIST_AVENGERS_SERIES = "s=avengers&type=series";
*/
/*
export const listAvengers = () => {
    apiList(URL_LIST_AVENGERS)
 };

export const listAvengersSeries = () => {
   apiList(URL_LIST_AVENGERS_SERIES)
};
*/

/*
import { BASE_URL } from "./config.js";

export const apiList = (s, type) => {
    const url = BASE_URL + `s=${s}&type=${type}`;
    fetch(url)
        .then((response) => response.json())
        .then((results) => {
            const items = results.Search;
            viewItems(items);
        })
};


const viewItems = (items) => {

   // 1. Ciclare l'array   
    items.map((item) => {

    // 2. Estrapolare ogni item

    // 3. Estrapolare solo le proprietà che ti servono
    //    le proprietà sono Title, Year, Poster, Type
            console.group();
            console.log(item.Title);
            console.log(item.Year);
            console.log(item.Poster);
            console.log(item.Type);
            console.groupEnd();
        })
*/

/* **************

import { BASE_URL } from "./config.js";

export const apiList = (s, type) => {
    const url = BASE_URL + `s=${s}&type=${type}`;
    fetch(url)
        .then((response) => response.json())
        .then((results) => {
            const items = results.Search;
            viewItems(items);
        })
};

const viewItems = (items) => {
    // mi posiziono dove voglio mettere l'elenco dei movies
    const element = document.getElementById("movies");
    // ciclare l'array
    items.map((item) => {
        // creo il movie all'interno dell'array
        element.appendChild(createHTMLmovie(item));
    });
};


const createHTMLmovie = (movie) => {
    // creo un tag p vuoto
    const para = document.createElement("p");
    // creo un testo con il titolo del film
    const node = document.createTextNode(movie.Title);
    // inserisco dentro al tag p il testo
    para.appendChild(node);

    return para;
};


*/

import { BASE_URL } from "./config.js";

export const apiList = (s, type) => {
    const url = BASE_URL + `s=${s}&type=${type}`;
    fetch(url)
        .then((response) => response.json())
        .then((results) => {
            const items = results.Search;
            viewItems(items);
        })
};

const viewItems = (items) => {
    //Mi posiziono dove voglio mettere l'elenco dei movies
    const element = document.getElementById("movies");
    //Cicla l'array
    items.map((item) => {
        //Creo il movie all'interno del DOM
        element.appendChild(createHTMLMovie(item));
    });
};

const createHTMLMovie = (movie) => {
    //Creo un tag P vuoto
    const para = document.createElement("p");
    //Creo un testo con il titolo del movie
    const node = document.createTextNode(movie.Title);
    //Inserisco dentro al tag P il testo
    para.appendChild(node);

    return para;

};
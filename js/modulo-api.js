export const pippo = "https://www.omdbapi.com/?apikey=f6e1faa9&s=terminator";

export const somma = (param1,param2) => param1 + param2;
export const divisione = (param1,param2) => param1 / param2;

//const URL_LIST_AVENGERS = "https://www.omdbapi.com/?apikey=f6e1faa9&s=avengers";
const URL_LIST_AVENGERS_SERIES = "https://www.omdbapi.com/?apikey=f6e1faa9&s=avengers&type=series";
/*
export const listAvengers = () => {
    fetch(URL_LIST_AVENGERS)
    .then((response) => response.json())
    .then((results) => {
        const movies = results.Search;
        console.log(movies);
    });
*/

export const listAvengersSeries = () => {
    fetch(URL_LIST_AVENGERS_SERIES)
    .then((response1) => response1.json())
    .then((results1) => {
        const movies1 = results1.Search;
        console.log(movies1);
    }) 

};
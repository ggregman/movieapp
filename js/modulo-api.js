export const pippo = "https://www.omdbapi.com/?apikey=f6e1faa9&s=terminator";

export const somma = (param1,param2) => param1 + param2;
export const divisione = (param1,param2) => param1 / param2;

const URL_LIST_AVENGERS = "https://www.omdbapi.com/?apikey=f6e1faa9&s=avengers";

export const listAvengers = () => {
    fetch(URL_LIST_AVENGERS)
    .then((response) => response.json())
    .then((results) => {
        const movies = results.Search;
        console.log(movies);
    }) 
};
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

import {BASE_URL} from "./config.js";

export const apiList = (s, type) => {
    const url = BASE_URL + `s=${s}&type=${type}`;
    fetch(url)
        .then((response) => response.json())
        .then((results) => {
            const items = results.Search;
            console.log(items);
        })
};
import { BASE_URL } from "./config.js"

export const apilist = async (s, type) => {
  const url = BASE_URL + `s=${s}&type=${type}`;
  const responce = await fetch(url);
  const result = await responce.json();
  const items = result.Search;
  viewItems(items);
};

/*const viewItems = (items) =>{
    items.map((item) =>{
        console.group();
        console.log(item.Title);
        console.log(item.Year);
        console.log(item.Type);
        console.log(item.Poster);
        console.groupEnd();
    });
}
*/
const viewItems = (items) => {
  let indice = 1;
  //Ciclare l'array
  items.map((item) => {
    //Creo il movie all'interno del DOM
    createHTMLMovie(item, indice);
    indice++;
  });
};

const createHTMLMovie = (movie, i) => {
  const div = document.getElementById(`film${i}`);
  const img = document.getElementById(`film-img-${i}`);
  const anno = document.getElementById(`film-anno-${i}`);
  const titolo = document.getElementById(`film-titolo-${i}`);

  const h3 = document.createElement("h3");
  const node = document.createTextNode(movie.Title);
  h3.appendChild(node);
  div.replaceChild(h3, titolo);

  const para = document.createElement("p");
  const node2 = document.createTextNode(movie.Year);
  para.appendChild(node2);
  div.replaceChild(para, anno);

  img.src = `${movie.Poster}`;

};
const API_KEY = "f6e1faa9"
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&`;

const API_URL = BASE_URL + API_KEY;

const PROVA_URL = API_URL + '&s=marvel&type=movie';

const CONTENT_TYPE = {
    MOVIE: "movie",
    SERIES: "series",
    EPISODE: "episode",
}

const main = document.getElementById("main")

const getMovies = (url) => {

    fetch(url)
        .then((response) => response.json())
        .then((results) => {
        console.log(results)
           viewItems(results.Search)
    })
};

const viewItems = (items) => {
    main.innerHTML ='';

    items.map ((movie) => {
    const {Poster, Title, Plot, Genre, Runtime} = movie;
    const movieOBJ = document.createElement('div');
    movieOBJ.classList.add('movie');
    movieOBJ.innerHTML = 
    `<img src="${Poster}" alt="${Title}">
            <div class="movie-info">
                <h3>"${Title}"</h3>
                <span>${Runtime} | ${Genre}</span>
            </div>

            <div class="riassunto">
                <p>${Plot}</p>
            </div>
            
        </div>`
    main.appendChild(movieOBJ)
    })
};

/*
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);  */ 

getMovies(PROVA_URL);


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



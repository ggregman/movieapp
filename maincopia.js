/*export const URL="http://www.omdbapi.com/?i=tt3896198&apikey=4bc01fe7&t=terminator";
export const URL2="http://www.omdbapi.com/?i=tt3896198&apikey=4bc01fe7&s=terminator&type=series";*/



/*export const film=() =>{
    fetch(URL)
        .then((response)=>response.json())
        .then((results)=>{
            const movies=results.Title;
            console.log(movies);
        });
       
};

export const serie=() =>{
    fetch(URL2)
        .then((response)=>response.json())
        .then((results)=>{
            const series=results.Search;
            console.table(series);
        });

};*/

/*export const apiList =(s,type) =>{
    const url= BASE_URL + `s=${s}&type=${type}`;
    fetch(url)
        .then((response)=>response.json())
        .then((results)=>{
            const items=results.Search;
           /*console.table(items);
           viewItems(items);
        });
       
};

const viewItems=(items) => {
            
            //1. Ciclare array
            //2. Estrapolare gli item
            //3. Estrapolare solo le proprietà richieste (Title,Year,Poster,Type)



    

    
    items.map( (item)=>{
    
       
  
        //mi posiziono dove voglio mettere l'elenco dei movies
        const element=document.getElementById("slides");

        const createHTMLMovie=(movie)=>{

            var divElement = document.createElement("div");
            divElement.id = "swiper-slide";




            //creo un tag h3 vuoto
             const para=document.createElement("h3");
       
            //creo un testo con il titolo del movie
             const node=document.createTextNode(item.Title);
            
       
            //inserisco dentro il tag p il testo
             para.appendChild(node);
             divElement.appendChild(para);

             
             return divElement;
           }
        element.appendChild(createHTMLMovie(item));

};*/

import{BASE_URL} from "../js/config.js";
import {CONTENT_TYPE} from "../js/config.js";



/*apiList per il singolo film*/

/*export const apiListFilm = (s1) => {
  const url1 = BASE_URL + "i=" + s1 + "&plot=short" ;
  fetch(url1)
  .then((response1)=>response1.json())
  .then((results1)=>{
    const items1=results1;
      
      stampa(items1);
      
    });
};*/


   /* const stampa= async (items1)=>{
      
      return  await items1.Plot;
    }*/
   
        
       

 /* const viewItemsFilm =  (items) => {
    items.map((item) => {
     
      const arr=[item.Cast,item.Plot];

     return arr;
    

    });
  };*/

/***************************************************** */



export const apiList = async (s, type) => {
    const url = BASE_URL + "s=" + s + "&type=" + type + "&page=1" ;
 try{   
    const response = await fetch(url);
      const results = await response.json();
        const items = await results.Search;
        viewItems(await items);
    }catch (error) {
        console.log(error.message);
      }
    };
  





  const viewItems =  (items) => {
    items.map((item) => {
     


      if (item.Type == CONTENT_TYPE.MOVIE) {
        let a = document.querySelector('.MI1');
        a.appendChild(cardbuilder(item));
      }
    
      if (item.Type == CONTENT_TYPE.SERIES) { 
        let a = document.querySelector('.MI2');
        a.appendChild(cardbuilder(item));
      }

    });
  };
  
  

  
  const cardbuilder = (item) => {
    
    
    const title = document.createElement("h5");
    title.className ="card-text";
    const node = document.createTextNode(item.Title);
  
    title.appendChild(node);

    const p = document.createElement("p");
    p.className="card-text";
    const node2 = document.createTextNode(item.Year);
    
    

    p.appendChild(node2);

    const card_body=document.createElement("div");
    card_body.className="card-body";
    
    card_body.appendChild(title);

    const card=document.createElement("div");
    card_body.className="card";
    card.appendChild(card_body);
    
    
    const slide = document.createElement("div");
    slide.className = "item";

    
    slide.style = `background-image: url(${item.Poster});`;
  
    const pad15=document.createElement("div");
    pad15.className=pad15;

    
    
    pad15.appendChild(card);
    slide.appendChild(p);
   
    
    
    
    slide.appendChild(title);
    slide.appendChild(card_body);
    slide.appendChild(pad15);
    
    
    /*slide.onclick = function() {
        window.location.href = '';
    };*/

    /*creo il popup*/

    /*const overl=document.createElement("div");
    overl.id="overlay";
    
    const pop=document.createElement("div");
    pop.id="popup";

    const popupcontrols=document.createElement("div");
    popupcontrols.className="popupcontrols";

    const popupclose=document.createElement("span");
    popupclose.className="popupclose";

    const fa = document.createElement("i");
    fa.className="fa-solid fa-x";
    fa.style="height: 10px;padding: 10px;";

    popupclose.appendChild(fa);
    popupcontrols.appendChild(popupclose);
    

    const popupcontent = document.createElement("div");
    popupcontent.className="popupcontent";

    const h1 = document.createElement("h3");
    const node3=document.createTextNode(item.Title);

    h1.appendChild(node3);

    popupcontent.appendChild(h1);
    pop.appendChild(popupcontrols);
    pop.appendChild(popupcontent);
    
    
    document.body.appendChild(pop);*/


    const overl=document.createElement("div");
    overl.id="overlay";
    
    const pop=document.createElement("div");
    pop.id="popup";
    pop.style=(" border: 1px solid #d0d0d0;");

    const popupcontrols=document.createElement("div");
    popupcontrols.className="popupcontrols";

    const popupclose=document.createElement("span");
    popupclose.className="popupclose";
    

    const fa = document.createElement("button");
    fa.className="fa-solid fa-x fa-2x active-bg;";
    fa.style="width:fit-content; height: fit-content;max-height:10vh; padding: 10px; margin-left:10px;margin-top:2vh; border-radius: 50px;width:fit-content; position:absolute;background-color:#5bc0de";

    popupclose.appendChild(fa);
    popupcontrols.appendChild(popupclose);
    

    const popupcontent = document.createElement("div"); 
    popupcontent.className="popupcontent";
    popupcontent.style=("text-overflow:ellipsis");

    const h1 = document.createElement("h3");
    h1.style=("padding-top:10vh;");
    const node3=document.createTextNode(item.Title);/*aggiungo titolo film*/


    h1.appendChild(node3);
  
    
    const testo=document.createElement("div");
    testo.className="testopopup";
    const node4=document.createTextNode("ANNO: " + item.Year );/*aggiungo anno film*/
    const anno=document.createElement("p");/*creo uno break per andare a capo*/
    anno.appendChild(node4);
    testo.appendChild(anno);

    /*chiamata api per il singolo film*/

  
    
     const stampa1= async (items1)=>{
      
      
      const node5=document.createTextNode("TRAMA: " + items1.Plot);/*aggiungo trama film*/
      
      const pl= document.createElement("p");
      pl.appendChild(node5);
      testo.appendChild(pl);

      const node6=document.createTextNode("CAST: " + items1.Actors);/*aggiungo attori*/
      
      const ac= document.createElement("p");
      ac.appendChild(node6);
      testo.appendChild(ac);

      const node7=document.createTextNode("DURATA: " + items1.Runtime);/*aggiungo durata*/
      
      const ru= document.createElement("p");
      ru.appendChild(node7);
      testo.appendChild(ru);

      const node8=document.createTextNode("GENERE: " + items1.Genre);/*aggiungo genere*/
      
      const ge= document.createElement("p");
      ge.appendChild(node8);
      testo.appendChild(ge);

      const node9=document.createTextNode("LINGUA: " + items1.Language);/*aggiungo genere*/
      
      const lan= document.createElement("p");
      lan.appendChild(node9);
      testo.appendChild(lan);

    }

    /* const apiListFilm1 = async (s1) => {
      const url1 = BASE_URL + "i=" + s1 + "&plot=short" ;
   try{   
      const response1 = await fetch(url1);
        const results1 = await response1.json();
          const items1 = await results1;
  
          await stampa1(items1);
          console.log(stampa1(items1));
      }catch (error) {
          console.log(error.message);
        }
      };*/

      const apiListFilm1 = (s1) => {
        const url1 = BASE_URL + "i=" + s1 + "&plot=short" ;
        fetch(url1)
        .then((response1)=>response1.json())
        .then((results1)=>{
          const items1=results1;
            
            stampa1(items1);
          });
        };
    
    (apiListFilm1(item.imdbID)); 
    
      
      /****************************** */

   
    popupcontent.appendChild(h1);
    

    popupcontent.appendChild(testo);
   
    pop.appendChild(popupcontrols);
    pop.appendChild(popupcontent);
    
    
    
    document.body.appendChild(pop);

  
  /*var closePopup = document.getElementById("popupclose");*/
  /*var overlay = document.getElementById("overlay");*/
 /* var popup = document.getElementById("popup");*/
   
  slide.onclick=function() {
    pop.style.display = 'block';
    document.getElementById("modalOverlay").style.display = "block";
  };

  popupclose.onclick = function() {
    overl.style.display = 'none';
    pop.style.display = 'none';
    document.getElementById("modalOverlay").style.display = "none";
  };

  
    return slide;
  };


  /*RICERCA*//////////////////////////////////



  export const ricerca =  (s2, type2) => {

    document.getElementById("M11").innerHTML = "";
    document.getElementById("M22").innerHTML = "";
    /*document.getElementById("secondoslider").style.display ="none";
    document.getElementById("primoslider").style.display ="none";*/

    if(s2 ==""){
      
     
      console.log(document.getElementById("barraricerca").value);
      apiList("terminator", CONTENT_TYPE.MOVIE);
      apiList("star wars", CONTENT_TYPE.SERIES);
   
      document.getElementById("primoslider").style.display ="inline-block";
      document.getElementById("film").style.display ="inline-block";
      document.getElementById("secondoslider").style.display ="inline-block";
      document.getElementById("series").style.display ="inline-block";

    }
    else{
      const url2 = BASE_URL + "s=" + s2 + "&type=" + type2 + "&page=1" ;
    

    fetch(url2)
    .then((response2)=>response2.json())
    .then((results2)=>{
      const items2=results2.Search;

        /*nascondo le serie o i film in base al risultato richiesto*/
        
      
      if(type2=="movie"){


        document.getElementById("M22").innerHTML = "";
        document.getElementById("series").style.display = "none";
        document.getElementById("film").style.display = "inline-block";
       /* document.getElementById("fila2").style.display = "none";
        document.getElementById("fila1").style.display = "inline-block";*/
        
        document.getElementById("lft1").style.display = "inline-block";
        document.getElementById("rgt1").style.display = "inline-block";

        document.getElementById("lft2").style.display = "none";
        document.getElementById("rgt2").style.display = "none";

        
        /*document.getElementById("secondoslider").style.display ="none";*/
        
      
        viewItems(items2);  

        document.getElementById('anchor1').scrollIntoView();
             
      }
      
     else{
        document.getElementById("M11").innerHTML = "";
        document.getElementById("film").style.display = "none";
        document.getElementById("series").style.display = "inline-block";
        /*document.getElementById("fila2").style.display = "inline-block";
        document.getElementById("fila1").style.display = "none";*/

        document.getElementById("lft1").style.display = "none";
        document.getElementById("rgt1").style.display = "none";

        document.getElementById("lft2").style.display = "inline-block";
        document.getElementById("rgt2").style.display = "inline-block";
        /*document.getElementById("primoslider").style.display ="none";*/
       
        
        viewItems(items2);
      
        document.getElementById('anchor2').scrollIntoView();
    
      }
    
      

        
      });

      

    }


    };

    


    document.getElementById("submit1").addEventListener('click', function() {
    if(dropdownMenuButton1){
    var select = document.getElementById('dropdownMenuButton1');
    var value=select.options[select.selectedIndex].value;
    
    ricerca(document.getElementById("barraricerca").value, value);

    
    
    }
    if(dropdownMenuButton2){
    var select = document.getElementById('dropdownMenuButton2');
    var value=select.options[select.selectedIndex].value;
    
    ricerca(document.getElementById("barraricerca").value, value);

    
    }


    
  });

  



 
  /*popup*/

  var closePopup = document.getElementById("popupclose");
  var overl = document.getElementById("overlay");
  var popup = document.getElementById("popup");

// When the user clicks on <div>, open the popup
export const popUp=()=> {
  var popup = document.getElementById("popup");
  popup.classList.toggle("show");
  document.getElementById("modalOverlay").style.display = "block";

}




 /*document.addEventListener('DOMContentLoaded',apiList("terminator", CONTENT_TYPE.MOVIE));
 document.addEventListener('DOMContentLoaded',apiList("star wars", CONTENT_TYPE.SERIES));

*/
if (document.getElementById("barraricerca").value == "") {
document.addEventListener('DOMContentLoaded',function () {
  
      
  console.log(document.getElementById("barraricerca").value);
   apiList("terminator", CONTENT_TYPE.MOVIE);
   apiList("star wars", CONTENT_TYPE.SERIES);

   document.getElementById("primoslider").style.display ="inline-block";
   document.getElementById("film").style.display ="inline-block";
   document.getElementById("secondoslider").style.display ="inline-block";
   document.getElementById("series").style.display ="inline-block";
   
  
})
};

 document.addEventListener('DOMContentLoaded', function() {
 

   if(overl) {
  overl.style.display = 'none';
  popup.style.display = 'none';
  $("html").remove('<div class="modalOverlay">');
   }
});

  
  

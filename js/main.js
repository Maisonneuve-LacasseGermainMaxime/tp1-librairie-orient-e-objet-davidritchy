import { livres } from "../data/livres.js";
import Filtre from "../classe/Filtre.js";
import Article from "../classe/Article.js";

//(function(){

const conteneur = document.querySelector("[data-js-fenetre]");
const main = document.querySelector("div.nbre_article");
const article = document.querySelector("[data-js-article]");
const choix = document.querySelector("[data-js-choix]");
const modale = document.querySelector("[data-js-modale]");
let link = choix.querySelectorAll("li");
const tableau = document.querySelector("[data-js-tableau]");
const panier = document.querySelector("[data-js-panier]");
let element, event;

//  function init(){

for (let i = 0; i < livres.length; i++) {
  conteneur.innerHTML += `  
        <div class="article" data-js-article>
        <div class="conteneur_img">
        <img src=${livres[i].image} alt="image"  data-js-img="image" />
        </div>
        
        <div class="conteneur_description">
            <p>${livres[i].titre} </p>
            <div class="ajouter">
                <p><strong>${livres[i].prix}$</strong></p>
                <div class="bouton">
                <p  data-js-bouton="bouton">ajouter</p>
                </div>
            </div>
        </div>
        </div> `;
}

choix.addEventListener("click", function (element) {
  console.log(element.target.textContent);
  return new Filtre(element.target, conteneur, link);
});

conteneur.addEventListener("click", function (event) {
  let declencheur = event.target;
  return new Article(declencheur, modale, main, tableau);
});

// fonction pour bloquer la barre de defilement
function enableScrolling() {
  window.onscroll = function () {};
}

modale.addEventListener("click", function () {
  modale.classList.add("inactive");
  enableScrolling(); // fonction pour bloquer la barre de defilement
});

panier.addEventListener("dblclick", function () {
  tableau.classList.remove("inactive");
  main.classList.add("inactive");
});

tableau.addEventListener("click", function () {
  tableau.classList.add("inactive");
  main.classList.remove("inactive");
});

//};

//init();

//})()

import { livres } from "../data/livres.js";
import Panier from "./Panier.js";

export default class Article {
  constructor(elementHtml, conteneur, corps, tablo) {
    this.elementHtml = elementHtml;
    this.conteneur = conteneur;
    this.corps = corps;
    this.tablo = tablo;
    this.parent = this.elementHtml.parentNode;
    this.conteneur_image = this.conteneur.querySelector("img");

    this.conteneur_detail = this.conteneur.querySelector("[data-js-detail]");

    console.log(this.conteneur_image);

    this.injecterContenu();
  }

  //fonction qui bloque le defilement.source: https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily
  
  disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  }

  ouvrezBoite() {
    this.conteneur.classList.remove("inactive");
    this.disableScrolling();

    console.log(window);
  }

  injecterContenu() {
    // this.ajouterPanier();

    if (this.elementHtml.dataset.jsImg == "image") {
      this.ouvrezBoite();
      this.conteneur_image.src = this.elementHtml.src;

      for (let i = 0; i < livres.length; i++) {
        if (
          this.elementHtml.src.replace("http://127.0.0.1:5500", ".") ==
          livres[i].image
        ) {
          this.conteneur_detail.innerHTML = `<p data-js-titre>Titre : ${livres[i].titre}</p>
              <p data-js-auteur>Auteur : ${livres[i].auteur}</p>
              <p data-js-editeur>Editeur : ${livres[i].editeur}</p>
              <p data-js-page>Pages : ${livres[i].pages}</p>
              <p data-js-description>
              ${livres[i].description}
              </p>`;
        }
      }
    } else if (this.elementHtml.dataset.jsBouton == "bouton") {
      new Panier(this.elementHtml, this.corps, this.tablo);
    }
  }
}

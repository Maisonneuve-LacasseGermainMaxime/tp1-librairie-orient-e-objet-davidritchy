import { tableau } from "../data/tableau.js";
import { livres } from "../data/livres.js";
import { prix } from "../data/prix.js";

export default class Panier {
  constructor(item, boite, tab) {
    this.item = item;
    this.tab = tab;
    this.boite = boite;
    this.produit = this.tab.querySelector("[data-js-produit]");
    this.total = this.tab.querySelector("[data-js-total]");
    this.somme = 0;

    this.ajouterPanier();
  }

  ajouterPanier() {
    let contenu = this.item.parentNode.parentNode.parentNode;
    let con = this.item.parentNode.parentNode;
    let contenu_bis = contenu.querySelector("p");
    let con_bis = con.querySelector("p");
    let text_contenu = contenu_bis.textContent;
    let prix_livre = con_bis.textContent.substring(
      0,
      con_bis.textContent.length - 1
    );
    let prix_entier = parseInt(prix_livre);

    tableau.push(text_contenu);
    prix.push(prix_entier);

    this.produit.innerHTML += `<li>${text_contenu} ---- ${prix_livre}$</li>`;

    for (let i = 0; i < prix.length; i++) {
      this.somme += prix[i];
    }

    this.total.textContent = "Total = " + this.somme + "$";

    if (tableau.length <= 1) {
      let gab = `<p>${tableau.length} article</p>`;
      this.boite.innerHTML = gab;
    } else {
      let gab = `<p>${tableau.length} articles</p>`;
      this.boite.innerHTML = gab;
    }
  }
}

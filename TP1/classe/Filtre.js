import { livres } from "../data/livres.js";

export default class Filtre {
  constructor(elementHTML, conteneur, link) {
    this.conteneur = conteneur;
    this.elementHTML = elementHTML;
    this.link = link;

    this.trierContenu();
  }

  trierContenu() {
    this.link.forEach((element) => {
      element.classList.remove("active");
    });
    this.conteneur.innerHTML = " ";
    for (let i = 0; i < livres.length; i++) {
      switch (this.elementHTML.textContent) {
        case livres[i].categorie:
          this.elementHTML.classList.add("active");
          this.conteneur.innerHTML += `  
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
          break;
        case "Tous":
          this.elementHTML.classList.add("active");
          this.conteneur.innerHTML += `  
                                    <div class="article" data-js-article>
                                    <div class="conteneur_img">
                                    <img src=${livres[i].image} alt="image" data-js-img ="image"/>
                                    </div>

                                    <div class="conteneur_description">
                                        <p>${livres[i].titre} </p>
                                        <div class="ajouter">
                                            <p><strong>${livres[i].prix}$</strong></p>
                                            <div class="bouton" >
                                            <p data-js-bouton="bouton">ajouter</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> `;
          break;
        case "Nouveautés":
          if (livres[i].nouveaute == true) {
            this.elementHTML.classList.add("active");
            this.conteneur.innerHTML += `  
                                <div class="article" data-js-article>
                                <div class="conteneur_img">
                                <img src=${livres[i].image} alt="image" data-js-img="image" />
                                </div>

                                <div class="conteneur_description">
                                    <p>${livres[i].titre} </p>
                                    <div class="ajouter">
                                        <p><strong>${livres[i].prix}$</strong></p>
                                        <div class="bouton">
                                        <p data-js-bouton="bouton">ajouter</p>
                                        </div>
                                    </div>
                                </div>
                            </div> `;
          }
          break;

        default:
          break;
      }
    }
  }
}

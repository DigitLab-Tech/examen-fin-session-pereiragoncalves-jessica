import '../css/style.css';

/**
 * Classe représentant une Carte.
 */

class Carte {

  /**
   * Carte.
   * @param {string} titleText
   */

  constructor(titleText, description) {   
    this.titleText = titleText;
    this.description = description;

  }

  /**
   * Génère le HTML pour la Carte.
   * @return {Element HTML}
   */

  toHtml() {
    const div = document.createElement('div');
    const spanTitle = document.createElement('span');
    const spanSizeSm = document.createElement('span');
    const spanSizeMd = document.createElement('span');
    const spanDesc = document.createElement('span');

    div.className = "carte bg-black text-white font-black rounded-md flex flex-col justify-center items-center w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] xl:w-[300px] xl:h-[300px]";
    spanTitle.textContent = this.titleText;

    spanSizeSm.className = 'sm:block md:block lg:hidden xl:hidden';
    spanSizeSm.textContent = '200px/200px';

    spanSizeMd.className = 'hidden sm:hidden md:hidden lg:block xl:block';
    spanSizeMd.textContent = '300px/300px';

    spanDesc.className = 'text-white font-black ';
    spanDesc.textContent = this.description;

    div.appendChild(spanTitle);
    div.appendChild(spanSizeMd);
    div.appendChild(spanSizeSm);
    div.appendChild(spanDesc);

    return div;
  }
}

/**
 * Liste des cartes.
 * @type {Carte[]}
 */

const cartes = [
  new Carte("1", "lonnngue description"),
  new Carte("2"),
  new Carte("3"),
  new Carte("4"),
  new Carte("5"),
  new Carte("6"),
  new Carte("7"),
  new Carte("8"),
  new Carte("9")
];

/**
 * Recuperer le container pour les cartes.
 * @type {Element HTML}
 */

const container = document.querySelector('.container');

cartes.forEach(carte => {
  container.appendChild(carte.toHtml());
});

/**
 * Bouton pour changer les couleurs des cartes.
 * @type {Element HTML}
 */

const btn = document.querySelector('.btn');

/**
 * Collection d'éléments HTML représentant les cartes.
 * @type {Liste d'Element HTML}
 */

const cartesHTML = document.querySelectorAll('.carte');

/**
 * Écoute l'événement au bouton pour changer les couleurs du background des cartes, bouton et du body.
 * @event
 */

btn.addEventListener('click', () => {
  cartesHTML.forEach(carte => {
    carte.classList.toggle('bg-black');
    carte.classList.toggle('bg-red-300');
  });
  btn.classList.toggle('bg-black');
  btn.classList.toggle('bg-red-300');
  document.body.classList.toggle('bg-blue-400');
  document.body.classList.toggle('bg-black');
});


const hiddenBtn = document.createElement('button');
hiddenBtn.className = 'btn bg-black w-full md:w-full lg:w-36 hover:bg-yellow-600 font-medium rounded-md text-white px-4 py-5';
hiddenBtn.textContent = 'Switch';

hiddenBtn.addEventListener('click', () =>{
  container.classList.toggle('hidden');
})

document.body.appendChild(hiddenBtn);
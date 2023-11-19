
// Nombre d'éléments à afficher initialement et à chaque clic
let displayedItems = 2;
let currentIndex = 0;
let maxItems = 6;

let about = [
    {
        title: "Développeur FrontEnd", 
        description: "J'ai commencé à programmer avec HTML et CSS.", 
        date:"Juillet 2022"
    },
    {
        title: "Développeur FrontEnd", 
        description: "J'ai ensuite commencé à utiliser JavaScript pour réaliser des fonctionnalités qui ne pouvaient pas être réalisées sans lui.", 
        date:"Novembre 2022"
    },
    {
        title: "Développeur FrontEnd", 
        description: "J'ai pris l'habitude d'utiliser SCSS.", 
        date:"Mars 2023"
    },
];

// Sélectionnez le conteneur une seule fois en dehors de la boucle
const container = document.getElementById('containerIlAbout');

// Affiche les éléments initiaux
function displayItems() {
    for (let i = currentIndex; i < currentIndex + displayedItems && i < about.length; i++) {
        const currentAbout = about[i];

        const cardElement = document.createElement('li');
        cardElement.innerHTML = `
          <h3 class="title">${currentAbout.title}</h3>
          <p>
            ${currentAbout.description}
          </p>
          <span class="circle"></span>
          <span class="date">${currentAbout.date}</span>
        `;

        container.appendChild(cardElement);
    }

    currentIndex += displayedItems;
    
}

// Appel initial pour afficher les éléments
displayItems();

const loadMore = document.getElementById("load-more");
loadMore.addEventListener("click", () => {
    displayItems();
});

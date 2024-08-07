/* script.js */
const words = [
    { word: "Sunshine", image: "https://via.placeholder.com/300?text=Sunshine", description: "A bright, sunny day." },
    { word: "Mountain", image: "https://via.placeholder.com/300?text=Mountain", description: "A tall, majestic mountain." },
    { word: "Ocean", image: "https://via.placeholder.com/300?text=Ocean", description: "A vast, deep blue ocean." },
    { word: "Forest", image: "https://via.placeholder.com/300?text=Forest", description: "A dense, green forest." },
    { word: "Desert", image: "https://via.placeholder.com/300?text=Desert", description: "A hot, arid desert." }
];

const container = document.querySelector('.container');

function createCard(data) {
    const card = document.createElement('div');
    card.className = 'card';

    const wordElement = document.createElement('h1');
    wordElement.textContent = data.word;

    const imageElement = document.createElement('img');
    imageElement.src = data.image;
    imageElement.alt = data.word;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = data.description;

    card.appendChild(wordElement);
    card.appendChild(imageElement);
    card.appendChild(descriptionElement);

    return card;
}

function populateCards() {
    for (let i = 0; i < 10; i++) { // You can change the number of cards
        const randomIndex = Math.floor(Math.random() * words.length);
        const cardData = words[randomIndex];
        const card = createCard(cardData);
        container.appendChild(card);
    }
}

populateCards();
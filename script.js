/* script.js */
const words = [
    { word: "Sunshine", image: "https://via.placeholder.com/300?text=Sunshine", description: "A bright, sunny day." },
    { word: "Mountain", image: "https://via.placeholder.com/300?text=Mountain", description: "A tall, majestic mountain." },
    { word: "Ocean", image: "https://via.placeholder.com/300?text=Ocean", description: "A vast, deep blue ocean." },
    { word: "Forest", image: "https://via.placeholder.com/300?text=Forest", description: "A dense, green forest." },
    { word: "Desert", image: "https://via.placeholder.com/300?text=Desert", description: "A hot, arid desert." }
];

function getRandomCard() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function updateCard() {
    const cardData = getRandomCard();
    document.getElementById('word').textContent = cardData.word;
    document.getElementById('image').src = cardData.image;
    document.getElementById('image').alt = cardData.word;
    document.getElementById('description').textContent = cardData.description;
}

document.getElementById('nextButton').addEventListener('click', updateCard);

// Initialize with a random card
updateCard();
import { fetchGameState, updateGameState } from './gameAPI.js';
import { renderGameBoard } from './renderGame.js';

let piles = {};

// Función para renderizar el juego
async function renderGame() {
    // Obtener el estado del juego desde el servidor
    const gameState = await fetchGameState();
    piles = gameState.piles;

    // Renderizar las cartas en los montones
    renderGameBoard(piles);

    // Configurar eventos drag-and-drop
    enableDragAndDrop();
}

// Habilitar funcionalidad de arrastrar y soltar
function enableDragAndDrop() {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('dragstart', handleDragStart);
    });

    document.querySelectorAll('.pile').forEach(pile => {
        pile.addEventListener('dragover', handleDragOver);
        pile.addEventListener('drop', handleDrop);
    });
}

// Manejar inicio del arrastre
function handleDragStart(event) {
    const cardData = event.target.dataset.card;
    event.dataTransfer.setData('text/plain', cardData);
}

// Permitir soltar en un objetivo válido
function handleDragOver(event) {
    event.preventDefault(); // Necesario para permitir el "drop"
}

// Manejar el evento de soltar
async function handleDrop(event) {
    event.preventDefault();

    // Obtener datos de la carta arrastrada
    const cardData = event.dataTransfer.getData('text/plain');
    const card = JSON.parse(cardData);

    // Obtener el montón destino
    const targetPileId = event.target.id;
    if (targetPileId !== card.suit) {
        alert('Solo puedes mover la carta a su propio palo');
        return;
    }

    // Mover la carta al montón destino
    piles[card.suit].push(card);
    piles.deck = piles.deck.filter(c => !(c.rank === card.rank && c.suit === card.suit));

    // Actualizar el estado en el servidor
    await updateGameState(piles);

    // Renderizar el juego nuevamente
    renderGame();
}

// Inicializar el juego
renderGame();

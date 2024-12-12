// gameState.js
export const initializeDeck = () => {
    const suits = ['spades', 'hearts', 'diamonds', 'clubs'];
    const ranks = Array.from({ length: 13 }, (_, i) => i + 1); // 1 (As) a 13 (Rey)
    return suits.flatMap(suit => ranks.map(rank => ({ suit, rank })));
};

export let gameState = {
    piles: {
        deck: initializeDeck().sort(() => Math.random() - 0.5), // Mezcla inicial
        spades: [],
        hearts: [],
        diamonds: [],
        clubs: []
    }
};

export const getGameState = () => gameState;

export const updateGameState = (newPiles) => {
    gameState.piles = newPiles;
};



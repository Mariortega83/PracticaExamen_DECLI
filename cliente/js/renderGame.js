export function renderGameBoard(piles) {
    // Limpiar los montones antes de renderizar
    document.querySelectorAll('.pile').forEach(pile => (pile.innerHTML = ''));

    // Renderizar cartas en cada montón
    for (const [pileName, cards] of Object.entries(piles)) {
        const pileElement = document.getElementById(pileName);

        cards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.draggable = true;
            cardElement.dataset.card = JSON.stringify(card); // Guardar datos de la carta
            cardElement.textContent = `${card.rank} of ${card.suit}`;
            pileElement.appendChild(cardElement);
        });
    }
}

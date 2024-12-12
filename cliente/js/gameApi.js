const API_URL = 'http://localhost:3000/api/game';

export async function fetchGameState() {
    const response = await fetch(API_URL);
    return response.json();
}

export async function updateGameState(piles) {
    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ piles })
    });
}

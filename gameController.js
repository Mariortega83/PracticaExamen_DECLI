// gameController.js
import { getGameState, updateGameState } from './gameState.js';

export const getGame = (req, res) => {
    res.json(getGameState());
};

export const postGame = (req, res) => {
    const { piles } = req.body;
    if (!piles) {
        return res.status(400).send('Estado inválido');
    }
    updateGameState(piles);
    res.status(200).json({ message: 'Estado del juego actualizado' });
};


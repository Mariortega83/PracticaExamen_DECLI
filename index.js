// server.js
import express, { json } from 'express';
import cors from 'cors';
import { getGame, postGame } from './gameController.js';


const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(json());

// Rutas
app.get('/api/game', getGame);
app.post('/api/game', postGame);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

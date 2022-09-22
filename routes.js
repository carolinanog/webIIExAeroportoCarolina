import express from 'express';
import { detalhesViagem } from './middlewares/getDetalhesViagem.js'
import { escolherOrigemDestino } from './middlewares/escolherOrigemDestino.js';
import { exibirAeroportos } from './middlewares/getTodosAeroportos.js';
import { redirectRoute } from './middlewares/postAeroportos.js';
export const routes = express.Router();

routes.get("/viaje", escolherOrigemDestino);
routes.post("/viaje", redirectRoute);
routes.get("/voos/:origem/:destino", detalhesViagem);
routes.get("/listaAeroportos", exibirAeroportos);


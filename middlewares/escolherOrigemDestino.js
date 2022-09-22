import path from 'path';
import { DetalhesAeroportos } from '../models/aeroportoDB.js';
const templateEscolherOrigemEDestino = path.resolve('.', 'views', 'escolherOrigemEDestino.ejs');

export const escolherOrigemDestino = (req, res) => {
    DetalhesAeroportos.getAllCities((err, row) => {
    if(err) {
      return res.status(500).json({ message: 'Houve um problema ao acessar o banco de dados!' });
    };
    if(!row) {
      return res.status(404).json({ message: 'Aeroporto não encontrado!' });
    }
      res.render(templateEscolherOrigemEDestino, {
        row 
        })
    });
}; 




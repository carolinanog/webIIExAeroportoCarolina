import path from 'path';
import { DetalhesAeroportos } from '../models/aeroportoDB.js';
const templateExibirTodosAeroportos = path.resolve('.', 'views', 'todosAeroportos.ejs');

export const exibirAeroportos = (req, res) => {
  DetalhesAeroportos.getAllAirportInfo((err, row) => {
      res.render(templateExibirTodosAeroportos, {
        title: "Detalhes de todos os aeroportos brasileiros",
        row
      });
  });
}

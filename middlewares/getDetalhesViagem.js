import { DetalhesAeroportos } from '../models/aeroportoDB.js';

export const detalhesViagem = (req, res) => {
  const { origem, destino } = req.params;
  DetalhesAeroportos.getDetails(origem, (errOrigem, rowOrigem) => {
    if(errOrigem) {
      return res.status(500).json({ message: 'Houve um problema ao acessar o banco de dados!' });
    };
    if(!rowOrigem) {
      return res.status(404).json({ message: 'Aeroporto da cidade de origem não encontrado!' });
    }
    DetalhesAeroportos.getDetails(destino, (errDestino, rowDestino) => {
      if(errDestino) {
        return res.status(500).json({ message: 'Houve um problema ao acessar o banco de dados!' });
      };
      if(!rowDestino) {
        return res.status(404).json({ message: 'Aeroporto da cidade de destino não encontrado!' });
    }
      res
      .json(
        { 
          Origem: origem,
          Destino: destino,
          Descrição: `Voo partindo do ${rowOrigem.nome} (${rowOrigem.cidade}) até o ${rowDestino.nome} (${rowDestino.cidade}).`
        }
      );
    });
  });
}
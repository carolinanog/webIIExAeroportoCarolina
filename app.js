import express from 'express';
import pkg from 'dotenv';
import { routes } from './routes.js';
import path from 'path';
const { PORT } = pkg.config().parsed; 
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(express.static(path.resolve()));
app.set('view engine', 'ejs');


app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}.`);
    console.log(`Acesse http://localhost/viaje`)
});



//   <%row.forEach(aeroporto => {%> 
//   <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="img/<%=aeroporto.imagem%>" alt="<%=aeroporto.nome%>">
//   <div class="card-body">
//     <h5 class="card-title"><%=aeroporto.nome%></h5>
//     <p class="card-text"><%=aeroporto.cidade%> - <%=aeroporto.UF%></p>
//      Código IATA: <%=aeroporto.cod_IATA%></div>
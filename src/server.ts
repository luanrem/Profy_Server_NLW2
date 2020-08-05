import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação

app.listen(3333);

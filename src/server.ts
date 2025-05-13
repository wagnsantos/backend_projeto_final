import express from 'express';
import cors from 'cors';
import equipamentoRouters from './routers/equipamentoRoutes';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/equipamentos', equipamentoRouters);

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

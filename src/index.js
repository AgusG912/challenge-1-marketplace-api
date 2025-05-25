import cors from 'cors';
import express from 'express';
import { config } from 'dotenv';
import productsRouter from './routes/products.routes.js';
import salesRouter from './routes/sales.routes.js'
import { authorization } from './middleware/general/authorization-token.auth.js';

config();

const app = express();
const PORT = process.env.PORT;

app.use(cors())
app.use(express.json());
app.use(authorization)
app.use('/api', productsRouter);
app.use('/api/v2', salesRouter);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}.`)
})

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import "./database/connection"

const app = express();
const PORT = process.env.PORT || '3001';

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log('Server Running on PORT -> ', PORT));

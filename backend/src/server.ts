import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || '3001'

app.use(cors())

app.listen(PORT, () => console.log('Server Running on PORT -> ', PORT));

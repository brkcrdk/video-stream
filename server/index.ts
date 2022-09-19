import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';

import { createToken } from 'utils';

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

config();

app.get('/', (req, res) => {
  return res.send({ message: 'This is test' });
});

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});

import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';

import { createToken } from 'utils';
import { CreateTokenProps, GenericRequest } from 'types';

const port = 4000;
const app = express();

config();
app.use(cors());
app.use(express.json());

app.post('/createToken', (req: GenericRequest<CreateTokenProps>, res) => {
  const token = createToken(req.body);
  return res.send({ token });
});

app.listen(port, function () {
  console.log(`Express server running on port ${port}`);
});

import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';

import { createToken } from 'utils';
import { CretateTokenProps, GenericRequest } from 'types';

const port = 4000;
const app = express();

config();
app.use(cors());
app.use(express.json());

app.post('/createToken', (req: GenericRequest<CretateTokenProps>, res) => {
  const token = createToken({ roomName: 'testRoom', participantName: 'burak' });
  return res.send({ token });
});

app.listen(port, function () {
  console.log(`Express server running on port ${port}`);
});

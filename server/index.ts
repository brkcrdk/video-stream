import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';

import { createToken } from 'utils';

const port = 4000;
const app = express();

config();
app.use(cors());

app.get('/createToken', (req, res) => {
  const token = createToken({ roomName: 'testRoom', participantName: 'burak' });
  console.log(token);
  return res.send({ token });
});

app.listen(port, function () {
  console.log(`Express server running on port ${port}`);
});
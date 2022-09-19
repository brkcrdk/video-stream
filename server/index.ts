import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';

import { createToken } from 'utils';

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

config();
const token = createToken({
  participantName: 'Burak',
  roomName: 'room-test'
});
console.log('access token', token);

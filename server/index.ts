import { config } from 'dotenv';
import { createToken } from 'utils';

config();
const token = createToken({
  participantName: 'Burak',
  roomName: 'room-test'
});
console.log('access token', token);

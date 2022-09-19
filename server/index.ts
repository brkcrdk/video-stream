import { config } from 'dotenv';
config();
import { AccessToken } from 'livekit-server-sdk';

const roomName = 'name-of-room';
const participantName = 'user-name';

const at = new AccessToken('api-key', 'secret-key', {
  identity: participantName
});
at.addGrant({ roomJoin: true, room: roomName });

const token = at.toJwt();
console.log('access token', token);

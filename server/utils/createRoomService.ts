/**
 * This function will be available after deploying the app in to some server
 * Because working at local causes error on LiveKit's side with RoomService api
 */
import { RoomServiceClient } from 'livekit-server-sdk';
const livekitHost = 'http://localhost:4000';

const createRoomService = () => {
  const svc = new RoomServiceClient(
    livekitHost,
    process.env.API_KEY,
    process.env.SECRET_KEY
  );
  return svc;
};

export default createRoomService;

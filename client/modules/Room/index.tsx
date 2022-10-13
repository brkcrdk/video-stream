import { useRouter } from 'next/router';

import { DisplayContext, DisplayOptions, LiveKitRoom, useRoom, useParticipant } from '@livekit/react-components';
import { VideoPresets } from 'livekit-client';

function Room() {
  const {
    push,
    query: { token },
  } = useRouter();

  const { room, participants } = useRoom();

  console.log({ participants });

  if (!token) return null;

  return (
    <LiveKitRoom
      token={String(token)}
      url={String(process.env.NEXT_PUBLIC_WEB_SOCKET_URL)}
      onLeave={() => push('/')}
      roomOptions={{
        adaptiveStream: true,
        videoCaptureDefaults: {
          resolution: VideoPresets.h720.resolution,
        },
      }}
    />
  );
}
export default Room;

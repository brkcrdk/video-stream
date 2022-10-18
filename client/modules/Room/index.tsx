import { useRouter } from 'next/router';

import { DisplayContext, DisplayOptions, LiveKitRoom, useRoom, useParticipant } from '@livekit/react-components';
import { VideoPresets, Room } from 'livekit-client';

import StageRenderer from './StageRenderer';

function RoomT() {
  const {
    push,
    query: { token, video, audio },
  } = useRouter();

  // const { room, participants } = useRoom();

  if (!token) return null;

  const onConnected = async (room: Room) => {
    if (audio === 'true') {
      await room.localParticipant.setMicrophoneEnabled(true);
    }
    if (video === 'true') {
      await room.localParticipant.setCameraEnabled(true);
    }
  };

  return (
    <LiveKitRoom
      token={String(token)}
      url={String(process.env.NEXT_PUBLIC_WEB_SOCKET_URL)}
      onLeave={() => push('/')}
      onConnected={onConnected}
      roomOptions={{
        adaptiveStream: true,
        videoCaptureDefaults: {
          resolution: VideoPresets.h720.resolution,
        },
      }}
      stageRenderer={StageRenderer}
    />
  );
}
export default RoomT;

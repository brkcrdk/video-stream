import { useRouter } from 'next/router';

import { DisplayContext, DisplayOptions, LiveKitRoom, useRoom, useParticipant } from '@livekit/react-components';
import { VideoPresets, Room } from 'livekit-client';

import StageRenderer from './StageRenderer';

function RoomT() {
  const {
    push,
    query: { token },
  } = useRouter();

  const { room, participants } = useRoom();

  if (!token) return null;

  const onConnected = async (room: Room) => {
    // make it easier to debug
    (window as any).currentRoom = room;

    // if (isSet(query, 'audioEnabled')) {
    //   const audioDeviceId = query.get('audioDeviceId');
    //   if (audioDeviceId && room.options.audioCaptureDefaults) {
    //     room.options.audioCaptureDefaults.deviceId = audioDeviceId;
    //   }
    await room.localParticipant.setMicrophoneEnabled(true);
    // }

    // if (isSet(query, 'videoEnabled')) {
    //   const videoDeviceId = query.get('videoDeviceId');
    //   if (videoDeviceId && room.options.videoCaptureDefaults) {
    //     room.options.videoCaptureDefaults.deviceId = videoDeviceId;
    //   }
    await room.localParticipant.setCameraEnabled(true);
    // }
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
      // stageRenderer={StageRenderer}
    />
  );
}
export default RoomT;

import { useEffect, useState } from 'react';

import { VideoRenderer } from '@livekit/react-core';
import { createLocalAudioTrack, createLocalVideoTrack, LocalVideoTrack } from 'livekit-client';
import { AspectRatio } from 'react-aspect-ratio';

function Home() {
  const [roomName, setRoomName] = useState('');
  const [participantName, setParticipantName] = useState('');
  // const [videoEnabled, setVideoEnabled] = useState(true);
  // const [audioEnabled, setAudioEnabled] = useState(true);
  const [videoTrack, setVideoTrack] = useState<LocalVideoTrack | null>(null);

  useEffect(() => {
    const getLocalVideo = async () => {
      const localVideo = await createLocalVideoTrack();
      await createLocalAudioTrack();
      setVideoTrack(localVideo);
    };
    getLocalVideo();
  }, []);

  const handleConnect = async () => {
    const request = await fetch('http://localhost:4000/createToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        roomName,
        participantName,
      }),
    });
    const response: { token: string } = await request.json();
    console.log(response.token);
  };

  return (
    <div style={{ display: 'grid', gap: 8 }}>
      <div>
        <input
          placeholder="Oda adını gir"
          value={roomName}
          onChange={e => setRoomName(e.target.value)}
        />
        <input
          placeholder="Katılımcı adını gir"
          value={participantName}
          onChange={e => setParticipantName(e.target.value)}
        />
        <button onClick={handleConnect}>Connect to Room</button>
      </div>
      <div>
        <AspectRatio ratio={16 / 9}>
          {videoTrack ? (
            <VideoRenderer
              track={videoTrack}
              isLocal
            />
          ) : (
            <div>Placeholder</div>
          )}
        </AspectRatio>
      </div>
    </div>
  );
}

export default Home;

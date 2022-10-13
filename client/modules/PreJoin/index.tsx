import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { VideoElement } from 'components';
import { createLocalAudioTrack, createLocalVideoTrack, LocalVideoTrack } from 'livekit-client';

function PreJoin() {
  const [roomName, setRoomName] = useState('');
  const [participantName, setParticipantName] = useState('');
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [videoTrack, setVideoTrack] = useState<LocalVideoTrack | null>(null);

  const { push } = useRouter();

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
    push(`/room?roomName=${roomName}&participantName=${participantName}&token=${response.token}`);
  };

  const toggleVideo = async () => {
    if (videoEnabled) {
      setVideoEnabled(false);
      videoTrack?.stop();
    } else {
      const track = await createLocalVideoTrack();
      setVideoTrack(track);
      setVideoEnabled(true);
    }
  };

  const toggleAudio = () => setAudioEnabled(prev => !prev);

  return (
    <div style={{ padding: 10, display: 'grid', gap: 16 }}>
      <header>
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
        <button
          disabled={!roomName || !participantName}
          onClick={handleConnect}
        >
          Connect to Room
        </button>
      </header>
      <VideoElement
        videoTrack={videoEnabled ? videoTrack : null}
        isLocal
      />
      <button onClick={toggleVideo}>Video Aç/Kapa</button>
      <button onClick={toggleAudio}>Sesi Aç/Kapa</button>
    </div>
  );
}
export default PreJoin;

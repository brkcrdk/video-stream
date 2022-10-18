import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { VideoElement } from 'components';
import { createLocalAudioTrack, createLocalVideoTrack, LocalVideoTrack, isBrowserSupported } from 'livekit-client';

import { CreateTokenProps } from '../../../server/types';

function PreJoin() {
  const [roomName, setRoomName] = useState('');
  const [participantName, setParticipantName] = useState('');
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [videoTrack, setVideoTrack] = useState<LocalVideoTrack | null>(null);

  const { push } = useRouter();

  useEffect(() => {
    const getLocalAudio = async () => {
      await createLocalAudioTrack();
      const localVideo = await createLocalVideoTrack();
      setVideoTrack(localVideo);
    };
    getLocalAudio();
  }, []);

  useEffect(() => {
    return () => {
      videoTrack?.stop();
    };
  }, [videoTrack]);

  const handleConnect = async () => {
    const createTokenOptions: CreateTokenProps = {
      roomName,
      participantName,
    };
    const request = await fetch('http://localhost:4000/createToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(createTokenOptions),
    });
    const response: { token: string } = await request.json();
    console.log(response.token);
    videoTrack?.stop();
    push(`/room?roomName=${roomName}&participantName=${participantName}&token=${response.token}`);
  };

  const toggleVideo = async () => {
    if (videoEnabled) {
      videoTrack?.stop();
      setVideoEnabled(false);
      setVideoTrack(null);
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

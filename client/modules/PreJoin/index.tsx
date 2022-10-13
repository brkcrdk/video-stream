import { useEffect, useState } from 'react';

import { VideoElement } from 'components';
import { createLocalAudioTrack, createLocalVideoTrack, LocalVideoTrack, VideoPresets } from 'livekit-client';

function PreJoin() {
  const [roomName, setRoomName] = useState('');
  const [participantName, setParticipantName] = useState('');
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [videoTrack, setVideoTrack] = useState<LocalVideoTrack | null>(null);

  useEffect(() => {
    const getLocalVideo = async () => {
      const localVideo = await createLocalVideoTrack({ resolution: VideoPresets.h720.resolution });
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

  const toggleVideo = async () => {
    if (videoEnabled) {
      setVideoEnabled(false);
      videoTrack?.stop();
    } else {
      const track = await createLocalVideoTrack({
        resolution: VideoPresets.h720.resolution,
      });
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
        <button onClick={handleConnect}>Connect to Room</button>
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

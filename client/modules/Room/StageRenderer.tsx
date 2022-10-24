import { useState } from 'react';

import { StageProps } from '@livekit/react-components';
import { Participant } from 'livekit-client';

import ParticipantVideo from './ParticipantVideo';

function StageRenderer({ roomState }: StageProps) {
  console.log(roomState);
  const { isConnecting, error, room } = roomState;
  const [selectedPerson, setSelectedPerson] = useState<Participant | null>(null);

  if (isConnecting) {
    return <h1>Connecting...</h1>;
  }
  if (error) {
    return <h1>Error: {error.message}</h1>;
  }
  if (!room) {
    return <h1>Room closed</h1>;
  }

  return (
    <nav style={{ maxWidth: 500 }}>
      {roomState?.participants.map(participant => (
        <button
          onClick={() => setSelectedPerson(participant)}
          key={participant.sid}
        >
          <ParticipantVideo participant={participant} />
        </button>
      ))}

      {selectedPerson && (
        <>
          <h1>Seçili Kişi:{selectedPerson.identity}</h1>
          <ParticipantVideo participant={selectedPerson} />
        </>
      )}
    </nav>
  );
}
export default StageRenderer;

import { useParticipant } from '@livekit/react-components';
import { Participant } from 'livekit-client';

import { VideoElement } from 'components';

interface Props {
  participant: Participant;
}

function ParticipantVideo({ participant }: Props) {
  const { cameraPublication, isLocal } = useParticipant(participant);
  if (!cameraPublication || !cameraPublication.isSubscribed || !cameraPublication.track || cameraPublication.isMuted) {
    return null;
  }

  return (
    <VideoElement
      isLocal={isLocal}
      videoTrack={cameraPublication.track}
      objectFit="cover"
    />
  );
}
export default ParticipantVideo;

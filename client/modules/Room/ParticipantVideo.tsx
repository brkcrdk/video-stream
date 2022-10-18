import { useParticipant } from '@livekit/react-components';
import { VideoElement } from 'components';
import { Participant } from 'livekit-client';

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

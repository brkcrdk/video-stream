import { VideoRenderer } from '@livekit/react-core';
import { LocalVideoTrack } from 'livekit-client';
import { AspectRatio } from 'react-aspect-ratio';

interface Props {
  videoTrack: LocalVideoTrack | null;
  isLocal?: boolean;
}

function VideoElement({ videoTrack, isLocal = false }: Props) {
  return (
    <div style={{ aspectRatio: 16 / 9, margin: '0 auto', maxWidth: 1440 }}>
      <AspectRatio
        ratio={16 / 9}
        style={{ height: '100%' }}
      >
        {videoTrack ? (
          <VideoRenderer
            track={videoTrack}
            isLocal={isLocal}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 4,
              background: '#999',
            }}
          >
            Placeholder
          </div>
        )}
      </AspectRatio>
    </div>
  );
}
export default VideoElement;

import { VideoRenderer, VideoRendererProps } from '@livekit/react-core';
import { LocalVideoTrack } from 'livekit-client';
import { AspectRatio } from 'react-aspect-ratio';

/**
 * VideoRendererProps'un içinden
 * - track propu yerine videoTrack propunu kullanmak için
 * - isLocal propup da kendi oluşturduğumuz isLocal prop ile çakıştığı için VideoRendererPropstan çıkarıp öyle extend ediyoruz.
 */
type RendererProps = Omit<VideoRendererProps, 'track' | 'isLocal'>;
interface Props extends RendererProps {
  videoTrack: LocalVideoTrack | null;
  isLocal?: boolean;
}

function VideoElement({ videoTrack, isLocal = false }: Props) {
  return (
    <AspectRatio
      ratio={16 / 9}
      style={{ height: 'calc(100vh - 140px)' }}
    >
      {videoTrack ? (
        <VideoRenderer
          track={videoTrack}
          isLocal={isLocal}
          objectFit="contain"
          width="100%"
          height="100%"
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
  );
}
export default VideoElement;

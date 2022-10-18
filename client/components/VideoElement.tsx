import { VideoRenderer, VideoRendererProps } from '@livekit/react-core';
import { LocalVideoTrack, Track } from 'livekit-client';
import { AspectRatio } from 'react-aspect-ratio';

/**
 * VideoRendererProps'un içinden
 * - track propu yerine videoTrack propunu kullanmak için
 * - isLocal propup da kendi oluşturduğumuz isLocal prop ile çakıştığı için VideoRendererPropstan çıkarıp öyle extend ediyoruz.
 */
type RendererProps = Omit<VideoRendererProps, 'track' | 'isLocal'>;
interface Props extends RendererProps {
  videoTrack: LocalVideoTrack | Track | null;
  isLocal?: boolean;
  isPreviewVideo?: boolean;
}

function VideoElement({ videoTrack, isLocal = false, isPreviewVideo = false, objectFit = 'contain', ...props }: Props) {
  return (
    <AspectRatio
      ratio={16 / 9}
      style={{ height: isPreviewVideo ? 'calc(100vh - 140px)' : '100%', background: '#999' }}
    >
      {videoTrack ? (
        <VideoRenderer
          track={videoTrack}
          isLocal={isLocal}
          objectFit={objectFit}
          width="100%"
          height="100%"
          {...props}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 4,
          }}
        >
          Placeholder
        </div>
      )}
    </AspectRatio>
  );
}
export default VideoElement;

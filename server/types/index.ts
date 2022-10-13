import { AccessTokenOptions, VideoGrant } from 'livekit-server-sdk';

export interface CretateTokenProps {
  roomName: string;
  participantName: string;
  accessTokenOpts?: AccessTokenOptions;
  grantOpts?: VideoGrant;
}
